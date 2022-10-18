import React, { FC, useState } from 'react';
import {
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import useStyles from './Login.styles';
import img from '../../../public/images/loginImgs/login.png';

interface state {
  password: string;
  showPassword: boolean;
}

const LoginPage: FC = () => {
  const [values, setValues] = useState<state>({
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof state) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const css = useStyles();
  return (
    <div className={css.main}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          gap: '15%',
        }}
      >
        <div className={css.left}>
          <Typography
            sx={{
              margin: '80px 0px 40px',
              fontWeight: '700',
              lineHeight: '1.5',
              fontSize: '2rem',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
            component="h3"
          >
            Привет,С Возврвщением
          </Typography>
          <img style={{ width: '100%' }} src={img} alt="login" />
        </div>
        <div id={css.rightAd} className={css.rightCl}>
          <div className={css.top}>
            <Grid
              rowSpacing={3}
              width="100%"
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  ml: 2,
                  margin: '0px',
                  lineHeight: '1.57143',
                  fontSize: '0.790rem',
                  fontWeight: '400',
                }}
                fontWeight="lg"
              >
                Нет аккаунта?
                <a className={css.topA} href="/">
                  Начать
                </a>
              </Typography>
            </Grid>
          </div>
          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            container
            width="100%"
          >
            <Typography
              sx={{
                mb: 2,
                fontSize: 25,
                fontWeight: 700,
                lineHeight: 1.5,
              }}
              component="h4"
            >
              Зарегистрироваться
            </Typography>
            <Typography
              sx={{
                mb: 4,
                fontSize: 15,
                fontWeight: 400,
                color: 'rgb(99, 115, 129)',
              }}
            >
              Введите свои данные ниже
            </Typography>
          </Grid>
          <Box />
          <Box
            sx={{
              width: '100%',
            }}
          >
            <FormControl sx={{ mb: 4, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                mt: 3,
              }}
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Запомнить меня" />
              <a className={css.forgot} href="/">
                Забыли пароль
              </a>
            </Grid>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(32, 101, 209)',
                width: '100%',
                mt: 3,
              }}
            >
              Войти
            </Button>
          </Box>
          <div className={css.bottom}>
            <Grid
              rowSpacing={3}
              width="100%"
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  ml: 2,
                  display: 'flex',
                  jystifyContent: 'space-between',
                  width: '100%',
                  margin: '0',
                }}
                fontWeight="lg"
              >
                Нет аккаунта?
                <a className={css.topA} href="/">
                  Начать
                </a>
              </Typography>
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default LoginPage;
