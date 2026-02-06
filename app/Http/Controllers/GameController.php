<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Inertia\Inertia;

class GameController extends Controller
{
    public function show(Game $game)
    {
        $game->load(['player1', 'player2', 'winner']);

        return Inertia::render('Game', [
            'game' => [
                'id' => $game->id,
            ],
        ]);
    }

    public function move(Request $req, Game $game)
    {
        $request->validate([
            'column' => 'required|integer|min:0|max:6',
        ]);

        $userId = $req->user()->id;
        $playerNumber = $game->player1_id === $userId ? 0 : 1;

        if ($game->current_turn !== $playerNumber) {
            return response()->json(['error' => 'Not your turn'], 403);
        }

        $board = $game->getBoardState();
        $column = $req->col;

        $row = null;
        for ($r = 5; $r >= 0; $r--) {
            if ($board[$r][$column] === null) {
                $row = $r;
                break;
            }
        }

        if ($row === null) {
            return response()->json(['error' => 'Column is full'], 400);
        }

        $game->addMove($column, $playerNumber);

        $winner = $this->checkWinner($board, $row, $column, $playerNumber);

        if ($winner) {
            $game->status = 'finished';
            $game->winner_id = $userId;
        } else {
            $game->current_turn = 1 - $game->current_turn;
        }

        $game->save();

        broadcast(new MoveMade($game, $column, $row, $playerNumber));

        return response()->json(['success' => true]);
    }
}
