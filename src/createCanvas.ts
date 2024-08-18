export const configureCanvas = (cvs: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;

    const boundingRect = cvs.getBoundingClientRect()

    cvs.style.width = `${boundingRect.height}px`;

    cvs.width = cvs.getBoundingClientRect().width * dpr;
    cvs.height = cvs.getBoundingClientRect().height * dpr;
    
    const ctx = cvs.getContext('2d')!;

    ctx.scale(dpr, dpr);

    window.addEventListener('resize', () => {
        cvs.width = cvs.getBoundingClientRect().width * dpr;
        cvs.height = cvs.getBoundingClientRect().height * dpr;
        ctx.scale(dpr, dpr);

    })

    return { cvs, ctx };
}