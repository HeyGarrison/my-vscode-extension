import { lstatSync, symlink } from 'fs';

(function() {
    const target = '/home/HeyGarrison/stackblitz-extension';
    const path = '/home/.stackblitz/extensions/stackblitz-extension';

    const isSymbolicLink = lstatSync(path).isSymbolicLink()

    if (isSymbolicLink) {
        console.log("Sym link already exists. Yay!")
        return;
    }

    if (!isSymbolicLink) {
        // Create the symbolic link
        symlink(target, path, err => {
            if (err) {
                console.error(`Error creating symbolic link: ${err}`);
            } else {
                console.log(`Created a sym link!`);
            }
        });
    }
})();
