import React from 'react';
import  styled  from 'styled-components';
import android from "../../../../img/android.svg";
import ios from "../../../../img/ios.svg";
import linux from "../../../../img/linux.svg";
import mac from "../../../../img/mac.svg";
import win from "../../../../img/win.svg";
import xbox from "../../../../img/xbox.svg";
import ps from "../../../../img/ps.svg";
import nintendo from "../../../../img/nintendo.svg";
import threedo from "../../../../img/3do.svg";
import atari from "../../../../img/atari.svg";
import commodore from "../../../../img/commodore.svg";
import web from "../../../../img/web.svg";
import sega from "../../../../img/sega.svg";

const ParentPlatformsStyled = styled.span`
display: inline-block;
img {
    height: 20px;
    margin: 0 5px -3px 5px;
}
`;
function ParentPlatforms({parentPlatforms}) {
    return (
        <ParentPlatformsStyled>
            {parentPlatforms.map((platform) => {
                switch (platform) {
                    case "android":
                        return <img key={"android"} src={android} alt="android" />;
                    case "ios":
                        return <img key={'ios'} src={ios} alt="ios" />;
                    case "linux":
                        return <img key={"linux"} src={linux} alt="linux" />;
                    case "mac":
                        return <img key={"mac"} src={mac} alt="mac" />;
                    case "pc":
                        return <img key={"pc"} src={win} alt="win" />;
                    case "xbox":
                        return <img key={"xbox"} src={xbox} alt="xbox" />;
                    case "playstation":
                        return <img key={"playstation"} src={ps} alt="ps" />;
                    case "nintendo":
                        return <img key={"nintendo"} src={nintendo} alt="nintendo" />;
                    case "3do":
                        return <img key={"3do"} src={threedo} alt="3do" />;
                    case "atari":
                        return <img key={"atari"} src={atari} alt="atari" />;
                    case "commodore":
                        return <img key={"commodore"} src={commodore} alt="commodore" />;
                    case "web":
                        return <img key={"web"} src={web} alt="web" />;
                    case "sega":
                        return <img key={"sega"} src={sega} alt="sega" />;
                    default:
                        return null;
                }
            }
            )}
        </ParentPlatformsStyled>
    );
}

export default ParentPlatforms;