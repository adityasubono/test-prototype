import {LoadingButton} from '@mui/lab';
import {
    Card,
    Checkbox,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import {Box, styled, useTheme} from '@mui/system';
import useAuth from 'app/hooks/useAuth';
import {Formik} from 'formik';
import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logoShields from '../../assets/highscope/logo-shields.png'
import logoHighScope from '../../assets/highscope/HighScopeLogo.png'
import backgroundSchool from '../../assets/highscope/Background-2.png'
import backgroundCity from '../../assets/highscope/background-city.png'
import * as Yup from 'yup';
import {themeShadows} from "../../components/MatxTheme/themeColors";
import {topBarNavbarLogin} from "../../utils/constant";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as url from "url";



const FlexBox = styled(Box)(() => ({display: 'flex', alignItems: 'center'}));

const JustifyBox = styled(FlexBox)(() => ({justifyContent: 'center'}));

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}));

// inital login credentials
const initialValues = {
    email: 'jason@highscope.co.id',
    password: 'dummyPass',
    remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be 6 character length')
        .required('Password is required!'),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const {login} = useAuth();

    const handleFormSubmit = async (values) => {
        setLoading(true);
        try {
            await login(values.email, values.password);
            navigate('/');
        } catch (e) {
            setLoading(false);
        }
    };

    const TopbarRoot = styled('div')(({theme}) => ({
        top: 0,
        zIndex: 96,
        backgroundColor: '#F5F5F5',
        transition: 'all 0.3s ease',
        boxShadow: themeShadows[8],
        height: topBarNavbarLogin,
    }));

    const TopbarContainer = styled(Box)(({theme}) => ({
        padding: '8px',
        paddingLeft: 40,
        paddingRight: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F5F5F5',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 16,
            paddingRight: 16,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 14,
            paddingRight: 16,
        },
    }));

    return (
        <div>
          <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <img src={logoHighScope} alt='Logo Highscope' style={{ width: '30%'}}/>
                </Box>
                <Box display="flex" alignItems="right">
                    <img src={logoShields} alt='Logo Shields' style={{width: '75%'}}/>
                </Box>
            </TopbarContainer>
          </TopbarRoot>
            <img src={backgroundCity} style={{
                position: "absolute",
                top: '20px',
                backgroundImage: `url(${backgroundCity})`,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                opacity: 0.1
            }}/>
            <Grid container>
                <Grid item xs={12} md={12} xl={12}>
                    <ContentBox>
                        <Box marginTop={'100px'}>
                            <Typography fontWeight='bold'
                                        sx={{
                                            color: '#222C64',
                                            typography: {
                                                xs: 'h5',
                                                md: 'h4',
                                                xl: 'h4'
                                            }
                                        }}>
                                HighScope Indonesia
                            </Typography>
                        </Box>


                        <Box marginBottom="30px">
                            <Typography gutterBottom
                                        sx={{
                                            color: 'black',
                                            typography: {
                                                xs: {
                                                    fontSize: '16px',
                                                    fontWeight: 'lighter'
                                                },
                                                md: {
                                                    fontSize: '25px',
                                                    fontWeight: 'lighter'
                                                },
                                                xl: 'h5'
                                            }
                                        }}
                            >
                                Sekolah HighScope Indonesia Electronic Database System (SHIELDS)
                            </Typography>
                        </Box>

                        <Typography sx={{
                            typography: {
                                xs: {
                                    display: 'none'
                                },
                                sm: {
                                    display: 'none'
                                },
                                md: {
                                    display: 'block'
                                }
                            }
                        }}>
                            <img src={backgroundSchool}
                                 style={{
                                     position: "absolute",
                                     top: '0',
                                     right: '0',
                                     width: '30%',
                                     height: 'auto',
                                 }}/>
                        </Typography>


                        <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid container>
                                        <Grid item xs='12' sm='5' md='3'>
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    type="email"
                                                    name="email"
                                                    label="Email"
                                                    variant="outlined"
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    helperText={touched.email && errors.email}
                                                    error={Boolean(errors.email && touched.email)}
                                                    sx={{ mb: 3}}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs='12' sm='5' md='3'>
                                            <Box>
                                                <TextField
                                            fullWidth
                                            size="small"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            label="Password"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}>
                                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>,
                                            }}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            onChange={handleChange}
                                            helperText={touched.password && errors.password}
                                            error={Boolean(errors.password && touched.password)}
                                            sx={{ mb: 1.5}}
                                        />
                                    </Box>
                                        </Grid>
                                    </Grid>



                                    <Grid container>
                                        <Grid xs='12' sm='5' md='3'>
                                            <LoadingButton
                                                fullWidth
                                                type="submit"
                                                color="success"
                                                loading={loading}
                                                variant="contained"
                                                sx={{ my: 2}}
                                                style={{
                                                    backgroundColor: "#222C64"
                                                }}
                                            >
                                                LOGIN
                                            </LoadingButton>
                                        </Grid>
                                    </Grid>


                                    <FlexBox justifyContent="space-between">
                                        <NavLink
                                            to="/session/forgot-password"
                                        >
                                            <Typography variant={"body1"} sx={{
                                                fontWeight: 'bold',
                                                color: "#222C64"
                                            }}>
                                                Forgot password ?
                                            </Typography>

                                        </NavLink>
                                    </FlexBox>
                                </form>
                            )}
                        </Formik>
                    </ContentBox>
                </Grid>
            </Grid>
        </div>

    );
};

export default JwtLogin;
