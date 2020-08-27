import * as React from 'react';
import * as ReactDOM from 'react-dom';

let maxPointBuy = 25;

let pointBuyPrices = {
    7: -4,
    8: -2,
    9: -1,
    10: 0,
    11: 1,
    12: 2,
    13: 3,
    14: 5,
    15: 7,
    16: 10,
    17: 13,
    18: 17
};

interface AbilityScoreArray {
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
}

let arrays: AbilityScoreArray[] = [
];
for (let dex = 7; dex <= 18; dex++) {
    for (let con = 7; con <= 18; con++) {
        for (let int = 7; int <= 18; int++) {
            for (let wis = 7; wis <= 18; wis++) {
                for (let cha = 7; cha <= 18; cha++) {

                    if (pointBuyPrices[dex] + pointBuyPrices[con] + pointBuyPrices[int] + pointBuyPrices[wis] + pointBuyPrices[cha] === maxPointBuy) {
                        arrays.push({
                            'dex': dex,
                            'con': con,
                            'int': int,
                            'wis': wis,
                            'cha': cha
                        });
                    }
                }
            }
        }
    }
}

function printArray(scoreArray: AbilityScoreArray): JSX.Element {
    let dexMod = Math.floor((scoreArray.dex - 10) / 2);
    let conMod = Math.floor((scoreArray.con - 10) / 2);
    let intMod = Math.floor((scoreArray.int - 10) / 2);
    let wisMod = Math.floor((scoreArray.wis - 10) / 2);
    let chaMod = Math.floor((scoreArray.cha - 10) / 2);

    return (<tr>
        <td>{scoreArray.dex}</td>
        <td>{scoreArray.con}</td>
        <td>{scoreArray.int}</td>
        <td>{scoreArray.wis}</td>
        <td>{scoreArray.cha}</td>
        <td>{dexMod + wisMod}</td>
        <td>{dexMod + intMod}</td>
        <td>{intMod}</td>
        <td>{wisMod}</td>
        <td>{chaMod}</td>
        <td>{conMod}</td>
    </tr>);

    //`Dex: ${scoreArray.dex}, Con: ${scoreArray.con}, Int: ${scoreArray.int}, Wis: ${scoreArray.wis} Cha: ${scoreArray.cha} AC: ${dexMod + wisMod} Attack: ${dexMod + intMod} Identify: ${intMod}, Perception: ${wisMod}, Luck: ${chaMod}, Endurance?: ${conMod}`
}



ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <table>
            <tr>
                <th>Dex</th>
                <th>Con</th>
                <th>Int</th>
                <th>Wis</th>
                <th>Cha</th>
                <th>AC</th>
                <th>Attack</th>
                <th>Identify</th>
                <th>Perception</th>
                <th>Luck</th>
                <th>Endurance</th>
            </tr>
            {arrays.map((scoreArray) => {
                return printArray(scoreArray)
            })}
        </table>

    </div>,
    document.getElementById("root")
);