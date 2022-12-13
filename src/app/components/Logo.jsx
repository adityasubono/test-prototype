import useSettings from 'app/hooks/useSettings';
import HighscopeLogoSvg from "../assets/highscope.logo.svg";

const Logo = ({className}) => {
    const { settings } = useSettings();
    const theme = settings.themes[settings.activeTheme];

    return (
        <div>
            <img src={HighscopeLogoSvg} width="60%" className={className}/>
        </div>
    );
};

export default Logo;
