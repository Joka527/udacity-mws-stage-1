console.log("register file is read!");
if (navigator.serviceWorker){
    navigator.serviceWorker.register("/js/sw.js").then(regsitration =>{
        console.log("Service worker registered!: "+regsitration.scope);
    }).catch(err => {
        console.log("Service worker registeration failed!: "+err);
    });
}