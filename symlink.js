const fs = require('fs');

function init() {
    const target = '/home/HeyGarrison/stackblitz-extension';
    const path = '/home/.stackblitz/extensions/stackblitz-extension';

    const isSymbolicLink = fs.lstatSync(path).isSymbolicLink()

    if (isSymbolicLink) {
        console.log("Sym link already exists. Yay!")
        return;
    }

    if (!isSymbolicLink) {
        // Create the symbolic link
        fs.symlink(target, path, err => {
            if (err) {
                console.error(`Error creating symbolic link: ${err}`);
            } else {
                console.log(`Created a sym link!`);
            }
        });
    }
}

init();
