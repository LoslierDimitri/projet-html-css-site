function test() {
    document.getElementById('demo').innerHTML = Date();
}

let table = [];
let table_size = 9;
/*
0: none
1: cross
2: round
*/

let img_cross = "<img src='../source/image/cross.png' width='100px' alt=''>";
let img_round = "<img src='../source/image/round.png' width='100px' alt=''>";
let img_square = "<img src='../source/image/square.png' width='100px' alt=''>";

let number_play_ai = 4;
let actual_play_ai = 0;

let player_win = 0;

function random(max) {
    return Math.floor(Math.random() * max);
}

function init() {
    for (let i = 0; i < table_size; i++) {
        table[i] = 0;
    }
    actual_play_ai = 0;
    player_win = 0;
    //false_game();
    return_table();
    result_text();
}

function false_game() {
    table[0] = 0;
    table[1] = 1;
    table[2] = 0;
    table[3] = 2;
    table[4] = 1;
    table[5] = 0;
    table[6] = 2;
    table[7] = 2;
    table[8] = 1;
}

function add(index, player) {
    if (player_win == 0) {
        if (table[index] == 0) {
            table[index] = player;
            test_table(1);
            if (player_win == 0) {
                ai_play();
                test_table(2);
            }
        }
    }
    return_table();
    result_text();
}

function add_ai(index, player) {
    if (table[index] == 0) {
        table[index] = player;
    }
}

function display_table(index) {
    if (table[index] == 0) {
        return img_square;
    }
    if (table[index] == 1) {
        return img_cross;
    }
    if (table[index] == 2) {
        return img_round;
    }
}

function ai_play() {
    if (actual_play_ai <= number_play_ai) {
        if (actual_play_ai == 0) {
            ai_play_normal();
        } else {
            ai_play_smart();
        }
        actual_play_ai += 1;
    }
}

function ai_play_normal() {
    let target = -1;
    let next_target = 0;

    while (target == -1) {
        next_target = random(9);
        if (table[next_target] == 0) {
            target = next_target;
            add_ai(target, 2);
        }
    }
}

function ai_play_smart() {
    let can_play_smart = false;

    if (table[0] == 1 && table[1] == 1) {
        add_ai(2, 2);
        can_play_smart = true;
    }
    if (table[1] == 1 && table[2] == 1) {
        add_ai(0, 2);
        can_play_smart = true;
    }
    if (table[3] == 1 && table[4] == 1) {
        add_ai(5, 2);
        can_play_smart = true;
    }
    if (table[4] == 1 && table[5] == 1) {
        add_ai(3, 2);
        can_play_smart = true;
    }
    if (table[6] == 1 && table[7] == 1) {
        add_ai(8, 2);
        can_play_smart = true;
    }
    if (table[7] == 1 && table[8] == 1) {
        add_ai(6, 2);
        can_play_smart = true;
    }

    if (table[0] == 1 && table[3] == 1) {
        add_ai(6, 2);
        can_play_smart = true;
    }
    if (table[3] == 1 && table[6] == 1) {
        add_ai(0, 2);
        can_play_smart = true;
    }
    if (table[1] == 1 && table[4] == 1) {
        add_ai(7, 2);
        can_play_smart = true;
    }
    if (table[4] == 1 && table[7] == 1) {
        add_ai(1, 2);
        can_play_smart = true;
    }
    if (table[2] == 1 && table[5] == 1) {
        add_ai(8, 2);
        can_play_smart = true;
    }
    if (table[5] == 1 && table[8] == 1) {
        add_ai(2, 2);
        can_play_smart = true;
    }

    if (table[0] == 1 && table[4] == 1) {
        add_ai(8, 2);
        can_play_smart = true;
    }
    if (table[4] == 1 && table[8] == 1) {
        add_ai(0, 2);
        can_play_smart = true;
    }
    if (table[2] == 1 && table[4] == 1) {
        add_ai(6, 2);
        can_play_smart = true;
    }
    if (table[4] == 1 && table[6] == 1) {
        add_ai(2, 2);
        can_play_smart = true;
    }

    if (can_play_smart == false) {
        ai_play_normal();
    }
}

function test_table(player) {
    if (
        (table[0] == player && table[1] == player && table[2] == player) ||
        (table[3] == player && table[4] == player && table[5] == player) ||
        (table[6] == player && table[7] == player && table[8] == player) ||
        (table[0] == player && table[3] == player && table[6] == player) ||
        (table[1] == player && table[4] == player && table[7] == player) ||
        (table[2] == player && table[5] == player && table[8] == player) ||
        (table[0] == player && table[4] == player && table[8] == player) ||
        (table[2] == player && table[4] == player && table[6] == player)
    ) {
        player_win = player;
    }
}

function return_table() {
    let result = "";

    result += "<table>";

    result += "<tr>";
    result += "<td>";
    result += "<button type='button' onclick='add(0, 1)'>";
    result += display_table(0);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(1, 1)'>";
    result += display_table(1);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(2, 1)'>";
    result += display_table(2);
    result += "</button>";
    result += "</td>";
    result += "</tr>";

    result += "<tr>";
    result += "<td>";
    result += "<button type='button' onclick='add(3, 1)'>";
    result += display_table(3);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(4, 1)'>";
    result += display_table(4);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(5, 1)'>";
    result += display_table(5);
    result += "</button>";
    result += "</td>";
    result += "</tr>";

    result += "<tr>";
    result += "<td>";
    result += "<button type='button' onclick='add(6, 1)'>";
    result += display_table(6);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(7, 1)'>";
    result += display_table(7);
    result += "</button>";
    result += "</td>";
    result += "<td>";
    result += "<button type='button' onclick='add(8, 1)'>";
    result += display_table(8);
    result += "</button>";
    result += "</td>";
    result += "</tr>";

    result += "</table>";

    document.getElementById('table').innerHTML = result;
}

function result_text() {
    let result_text = "";

    if (player_win == 1) {
        result_text += "player 1 win";
    }
    if (player_win == 2) {
        result_text += "player 2 win";
    }

    document.getElementById('result_text').innerHTML = result_text;
}