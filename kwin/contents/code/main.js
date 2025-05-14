function focusOrOpen(name, path) {
    return () => {
        const clients = workspace.windowList();
        print("Focusing " + name)

        for (var i = 0; i < clients.length; i++) {
            if(clients[i].caption.indexOf(name) != -1){
                workspace.activeWindow = clients[i]
                return;
            }
        }

        callDBus('org.kde.klauncher5', '/KLauncher', 'exec_blind', '/usr/bin/bash', path);
    }
}

function add(name, path, shortcut) {
    registerShortcut(name, `Focus or open ${name}`, shortcut, focusOrOpen(name, path));
}

const clients = workspace.windowList();
for (var i = 0; i < clients.length; i++) {
    print(clients[i].caption)
}


add("Konsole", "konsole", "Meta+§")
add("Firefox", "firefox", "Meta+F")
add("Code - OSS", "code", "Meta+C")

