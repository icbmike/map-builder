import React from "react"
import { listAssetNames, assets } from "~data/assets"

import "./SpriteList.scss"

export const SpriteList = () => {
    const sprite = (assetName: string, i : HTMLImageElement) => {
        return <div className="SpriteList-sprite">
            <span className="SpriteList-spriteName">{assetName}</span>
            <img src={i.src} className="SpriteList-spriteImage"/>
        </div>
    }

    return <div className="SpriteList">
        {listAssetNames().map(an => sprite(an, assets[an]!))}
    </div>
}