import css from '@/app/page.module.css';

// import { Container, TextField, Button } from '@mui/material';
// import { red } from '@mui/material/colors';

// import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { memo } from 'react';

// const color = red[500];

const Header = () => {
  return (
    <header>
      {/* <Container className={`${css.cont}`}>
        <div className={`${css.contInn}`}>
          <Image src={logo} alt="brand__icon" />
          <div className={`${css.inpGroup}`}>
            <TextField
              label="Search"
              type="text"
              autoComplete="current-text"
              className={`${css.inp}`}
            />
            <Button variant="contained">Search</Button>
          </div>
        </div>
        <div>
          <FavoriteIcon color="primary" />
          <span>orders</span>
        </div>
      </Container> */}
    </header>
  );
};

export default memo(Header);
