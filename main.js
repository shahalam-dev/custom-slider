const imgUrlArr = [
    'https://i.ibb.co/jVSnqg9/photo-1647089490645-8f8536370658-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/dpmrKTG/photo-1461009209120-103a8f970745-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
    'https://i.ibb.co/rsnz3Bv/photo-1462416949377-f91c1b0452f7-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/rvXY7kV/photo-1462400362591-9ca55235346a-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/LQVZDG9/photo-1441014023725-517f53f8ed61-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/vcW7xKx/photo-1442810030476-6d83b45a1094-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
    'https://i.ibb.co/KFJCc7b/photo-1439900988880-6e412df90b45-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/jL3q8zT/photo-1441126270775-739547c8680c-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/VVNDb1y/photo-1452475168325-672188dc4dc3-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/qMzj60x/photo-1451417379553-15d8e8f49cde-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/L9FH2Xz/photo-1440589473619-3cde28941638-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
    'https://i.ibb.co/Sr3v8cs/photo-1459259191495-52eccde892c7-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
    'https://i.ibb.co/YcNvXmL/photo-1421986527537-888d998adb74-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
    'https://i.ibb.co/ym9GDbG/k-VEPc-Wcf-SA2tg-Op-Rz9-Za-DSC0765-jpg-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f.jpg',
    'https://i.ibb.co/rbRGVt7/photo-1445098516063-9b0b2e4206e9-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg'
];




const slider = document.getElementById("slider");

let imgIndex = 0;

setInterval(() => {
    if(imgIndex >= imgUrlArr.length) {
        imgIndex = 0;
    }
    
    let i = imgIndex++;

    slider.style.backgroundImage = `url('${imgUrlArr[i]}')`;
    
    
}, 1000);
