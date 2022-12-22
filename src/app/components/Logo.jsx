import useSettings from 'app/hooks/useSettings';
import HighscopeLogoSvg from "../assets/highscope/Icon-HSI.png";

const Logo = ({className}) => {
    const { settings } = useSettings();
    const theme = settings.themes[settings.activeTheme];


    return (
        <div>
            <img src={HighscopeLogoSvg} width="80%" className={className}/>
        </div>
    );
}

export default Logo;
