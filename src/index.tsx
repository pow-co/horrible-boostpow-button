
import React from 'react';

import { Box, IconButton, SvgIcon, Typography } from '@mui/material';

import { wrapRelayx } from 'stag-relayx'

interface BoostpowButtonOptions {
  content: string;
  value: number;
  currency: string;
  difficulty?: number;
  tag?: string;
  catgory?: string;
  onClick?: Function;
  onSending?: Function;
  onError?: Function;
  onSuccess?: Function;
  showDifficulty?: boolean;
}

const BoostpowButton = ({ content, difficulty, onClick, onSending, onSuccess, onError }: BoostpowButtonOptions) => {

  const handleBoost = async (event: any) => {
    event.preventDefault();
    const value = 0.05;
    const currency = 'USD';

    if (onClick) {
      onClick()
    }
    
    try {

      //@ts-ignore
      const stag = wrapRelayx(relayone)

      if (onSending){ onSending() }

      const {txid, txhex, job} = await stag.boost.buy({
        content,
        value: 124_000,
        difficulty: 0.025
      })
      if (onSuccess){ onSuccess({txid, txhex, job}) }

      //@ts-ignore
      relayone.send({
        currency: 'USD',
        amount: 0.001,
        to: '1BZKajw1muBnFDEZMkAbE6Foscw3idzLRH' // boostpow.com revenue address
      })
      .catch((error: any) => {
        console.error('relayone.send.reward.error', error)
      })

    } catch (error: any) {
      console.error('relayx', error);

      if (onError) { onError(error) }
    }
  };

  return (
    <Box onClick={handleBoost} sx={{ minHeight: '55px', minWidth: '55px' }}>
        <SvgIcon
          viewBox="0 0 65 65"
          sx={{
            minHeight: '55px',
            minWidth: '55px',
            '.pulse': {
              animation: 'pulse 2.18s infinite',
              animationDirection: 'alternate-reverse',
              transformOrigin: '18.75%',
              position: 'relative',
              fill: '#6B9CFA'
            },
            '@keyframes pulse': {
              from: {
                transformOrigin: 'center'
              },
              to: {
                opacity: 0,
                transform: 'scale(1)'
              }
            }
          }}
        >
          <path
            className="pulse"
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
            fill="#CEDEFD"
          ></path>
          <path
            className="pulse"
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
          ></path>
          <path
            className="pulse"
            d="M32.4999 52.5876C43.5945 52.5876 52.5886 43.5936 52.5886 32.4989C52.5886 21.4042 43.5945 12.4102 32.4999 12.4102C21.4052 12.4102 12.4111 21.4042 12.4111 32.4989C12.4111 43.5936 21.4052 52.5876 32.4999 52.5876Z"
            fill="#6B9CFA"
          ></path>
          <path
            d="M44.9113 32.8604C44.9113 37.5655 42.2948 41.7715 38.4331 43.8773C36.6715 44.8413 34.646 41.5305 32.5 41.5305C30.4343 41.5305 28.4892 44.7667 26.7735 43.8773C22.7971 41.8059 20.083 37.6516 20.083 32.8604C20.083 26.0035 25.6431 20.4434 32.5 20.4434C39.3569 20.4434 44.9113 26.0035 44.9113 32.8604Z"
            fill="#085AF6"
          ></path>
          <path
            d="M40.1719 32.6561C40.1719 35.6054 38.5079 38.1645 36.0692 39.4499C35.002 40.0122 33.7855 36.2423 32.4945 36.2423C31.1288 36.2423 29.8492 40.0696 28.7418 39.4499C26.4007 38.1359 24.8228 35.5308 24.8228 32.6561C24.8228 28.4214 28.2598 24.9844 32.4945 24.9844C36.7291 24.9844 40.1719 28.4157 40.1719 32.6561Z"
            fill="white"
          ></path>
        </SvgIcon>
      {difficulty && (

        <Typography variant="body1" sx={{ fontSize: '16px', ml: '4px' }}>
          {difficulty.toFixed(4)} D
        </Typography>
      )}

    </Box>
  );
};

export default BoostpowButton;

