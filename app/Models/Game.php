<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'player1_id',
        'player2_id',
        'moves',
        'current_turn',
        'status',
        'winner_id',
    ];

    protected $casts = [
        'moves' => 'array',
    ];

    public function init(): void
    {
        $this->moves = [];
        $this->save();
    }

    public function addMove(int $col, int $player): array
    {
        $moves = $this->moves ?? [];

        $moves[] = [
            'column' => $column,
            'player' => $player,
            'timestamp' => now()->toISOString(),
        ];

        $this->moves = $moves;

        return $moves;
    }

    public function getMoveCount(): int
    {
        return count($this->moves ?? []);
    }
}
