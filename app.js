const fs = require('fs/promises');
const path = require('path');

const onlineUsers = [
    {
        name: 'Dmytro',
        age: 22,
        city: 'Kiev'
    },
    {
        name: 'Nastya',
        age: 21,
        city: 'Kharkov'
    },
    {
        name: 'Taras',
        age: 18,
        city: 'Ivano-Frankivsk'
    }
];
const inPersonUsers = [
    {
        name: 'Oleg',
        age: 25,
        city: 'Lviv'
    },
    {
        name: 'Sophia',
        age: 19,
        city: 'Lviv'
    },
    {
        name: 'Roma',
        age: 23,
        city: 'Lviv'
    }
];

async function homework() {
    try {
        await fs.mkdir(path.join(__dirname, 'main', 'onlineUsers'), {recursive: true});
        await fs.mkdir(path.join(__dirname, 'main', 'inPersonUsers'), {recursive: true});

        for (const onlineUser of onlineUsers) {
            await fs.appendFile(
                path.join(__dirname, 'main', 'onlineUsers', `${onlineUser.name}.txt`),
                `name: ${onlineUser.name}\nage: ${onlineUser.age}\ncity: ${onlineUser.city}\n`,
                {flag: 'w'}
            );
        }

        for (const inPersonUser of inPersonUsers) {
            await fs.appendFile(
                path.join(__dirname, 'main', 'inPersonUsers', `${inPersonUser.name}.txt`),
                `name: ${inPersonUser.name}\nage: ${inPersonUser.age}\ncity: ${inPersonUser.city}\n`,
                {flag: 'w'}
            );
        }
        //if necessary: comment
        await replace();
    } catch (e) {
        console.log(e);
    }
}

homework();

async function replace() {
    try {
        const namesOfDirs = await fs.readdir(path.join(__dirname, 'main'));

        const onlineFiles = await fs.readdir(path.join(__dirname, 'main', namesOfDirs[0]));
        const inPersonFiles = await fs.readdir(path.join(__dirname, 'main', namesOfDirs[1]));

        for (let i = 0; i < onlineFiles.length; i++) {
            await fs.rename(path.join(__dirname, 'main', namesOfDirs[0], onlineFiles[i]), path.join(__dirname, 'main', namesOfDirs[1], onlineFiles[i]));
            await fs.rename(path.join(__dirname, 'main', namesOfDirs[1], inPersonFiles[i]), path.join(__dirname, 'main', namesOfDirs[0], inPersonFiles[i]));
        }
    } catch (e) {
        console.log(e);
    }
}
