import {LoadingButton} from '@mui/lab';
import {Card, Checkbox, Grid, TextField, Typography} from '@mui/material';
import {Box, styled, useTheme} from '@mui/system';
import {Paragraph} from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import {Formik} from 'formik';
import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import imageLogin from '../../assets/images/illustrations/posting_photo.svg'
import logoShields from '../../assets/highscope/logo-shields.png'
import logoHighScope from '../../assets/highscope/HighScopeLogo.png'
import logoDevice from '../../assets/images/illustrations/posting_photo.svg'
import * as Yup from 'yup';
import {themeShadows} from "../../components/MatxTheme/themeColors";
import {topBarNavbarHeight, topBarNavbarLogin} from "../../utils/constant";

const FlexBox = styled(Box)(() => ({display: 'flex', alignItems: 'center'}));

const JustifyBox = styled(FlexBox)(() => ({justifyContent: 'center'}));

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
    background: '#FFFFFF',
    minHeight: '100% !important',
    '& .card': {
        margin: '1rem',
        display: 'flex',
        borderRadius: 12,
        alignItems: 'center',
    },
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
                <img src={logoHighScope} alt='Logo Highscope' style={{
                  width: '20%'
                }}/>
              </Box>

              <Box display="flex" alignItems="right">
                <img src={logoShields} alt='Logo Highscope' style={{
                  width: '70%'
                }}/>
              </Box>
            </TopbarContainer>
          </TopbarRoot>
          <JWTRoot>
            <Card className="card">
              <Grid container>
                <Grid item sm={6} xs={12} xl={6}>
                  <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
                    <h2 style={{
                      color: '#222C64'
                    }}>HighScope Indonesia</h2>

                    <Typography style={{
                      marginBottom: '19px'
                    }}>
                      <p>Sekolah HighScope Indonesia Electronic Database System (SHIELDS)</p>
                    </Typography>
                  </JustifyBox>
                </Grid>

                <Grid item sm={6} xs={12} xl={6}>
                  <ContentBox>
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                          <form onSubmit={handleSubmit}>
                            <Typography variant="h5" style={{
                              marginBottom: '19px'
                            }}>
                              <img src={logoHighScope} width="100%" alt="" />
                              Login
                            </Typography>
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
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                size="small"
                                name="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                onBlur={handleBlur}
                                value={values.password}
                                onChange={handleChange}
                                helperText={touched.password && errors.password}
                                error={Boolean(errors.password && touched.password)}
                                sx={{ mb: 1.5 }}
                            />

                            <FlexBox justifyContent="space-between">
                              <FlexBox gap={1}>
                                <Checkbox
                                    size="small"
                                    name="remember"
                                    onChange={handleChange}
                                    checked={values.remember}
                                    sx={{ padding: 0 }}
                                />

                                <Paragraph>Remember Me</Paragraph>
                              </FlexBox>

                              <NavLink
                                  to="/session/forgot-password"
                                  style={{ color: theme.palette.primary.main }}
                              >
                                Forgot password?
                              </NavLink>
                            </FlexBox>

                            <LoadingButton
                                type="submit"
                                color="primary"
                                loading={loading}
                                variant="contained"
                                sx={{ my: 2 }}
                            >
                              Login
                            </LoadingButton>

                            <Paragraph>
                              Don't have an account?
                              <NavLink
                                  to="/session/signup"
                                  style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                              >
                                Register
                              </NavLink>
                            </Paragraph>
                          </form>
                      )}
                    </Formik>
                  </ContentBox>
                </Grid>
              </Grid>
            </Card>
          </JWTRoot>
        </div>

    );
};

export default JwtLogin;
