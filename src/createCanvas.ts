export const createCanvas = () => {
    const cvs = document.createElement("canvas");

    cvs.style.height = '100%';
    cvs.style.width = '100%';
    cvs.style.backgroundColor = 'white';
    cvs.className = 'canvas';
    document.getElementsByTagName('body')[0].prepend(cvs);

    const dpr = window.devicePixelRatio || 1;

    cvs.width = cvs.getBoundingClientRect().width * dpr;
    cvs.height = cvs.getBoundingClientRect().height * dpr;

    const ctx = cvs.getContext('2d')!;

    ctx.scale(dpr, dpr);

    return { cvs, ctx };
}