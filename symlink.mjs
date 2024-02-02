import { lstatSync, symlink } from 'fs';

(function() {
    
    const target = '/home/HeyGarrison/stackblitz-extension';
    const path = '/home/.stackblitz/extensions/stackblitz-extension';

    let isSymbolicLink = false;
    try {
        isSymbolicLink = lstatSync(path).isSymbolicLink()    
    } catch (error) {
        
    }

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
