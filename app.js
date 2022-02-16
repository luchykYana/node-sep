const fs = require('fs/promises');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл
async function classwork1() {
    try {
        await fs.writeFile('first.txt', 'first.txt', 'utf8');

        await fs.writeFile('second.txt', await fs.readFile(path.join(__dirname, 'first.txt')));
    } catch (e) {
        console.log(e);
    }
}

classwork1();

// Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться.

async function classwork2() {
    try {
        await fs.writeFile('third.txt', 'third.txt', 'utf8');

        await fs.mkdir('test2');

        await fs.writeFile('test2/fourth.txt', await fs.readFile('third.txt'));

        await fs.unlink('third.txt');
    } catch (e) {
        console.log(e);
    }
}

classwork2();

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату))
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

async function classwork3() {
    try {
        await fs.mkdir('test3/firstFolder/secondFolder/thirdFolder', {recursive: true});
        await fs.mkdir('test3/firstFolder/fourthFolder');
        await fs.writeFile('test3/firstFile.txt', 'First');
        await fs.writeFile('test3/secondFile.txt', 'Second');
        await fs.writeFile('test3/firstFolder/thirdFile.txt', 'Third');
        await fs.writeFile('test3/firstFolder/fourthFolder/sixthFile.txt', 'Sixth');
        await fs.writeFile('test3/firstFolder/secondFolder/thirdFolder/fourthFile.txt', 'Fourth');
        await fs.writeFile('test3/firstFolder/secondFolder/thirdFolder/fifthFile.txt', 'Fifth');
        //if necessary: comment
        await check();
    } catch (e) {
        console.log(e);
    }
}

classwork3();

async function check(pathToItem = 'test3') {
    try {
        const content = await fs.readdir(pathToItem);

        const folderItems = [];

        for (const item of content) {
            if (item.endsWith('txt')) {
                await fs.truncate(path.join(pathToItem, item));
            } else {
                await fs.rename(path.join(pathToItem, item), path.join(pathToItem, '_new_' + item))

                folderItems.push('_new_' + item);
            }
        }

        if (folderItems.length) {
            for (const folderItem of folderItems) {
                await check(path.join(pathToItem, folderItem));
            }
        }
    } catch (e) {
        console.log(e);
    }
}
