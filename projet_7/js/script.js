let table = [];
let table_size = 42;

let player_win = 0;
/*
    0, neutral
    1, player 1
    2, player 2
    */

function init_table() {
    for (let i = 0; i < table_size; i++) {
        table[i] = 0;
    }
}

function init() {
    init_table();
    player_win = 0;
}

function turn(index) {}

function player_play(index) {}

function ai_play() {}

function display_cell() {}

function display_table() {}