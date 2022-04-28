// Libraries
import React from 'react';
import { Button, TitleInfo } from '../../Atoms';

interface SocialNetworkProps {}

export const SocialNetwork: React.FC<SocialNetworkProps> = props => {
  const handleOpenNewTab = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <TitleInfo>On the web</TitleInfo>
      <div className="flex flex-col gap-4">
        <Button
          className="pd-btn-link gap-2 pd-btn-primary hover:pd-btn-primary grow-0 w-fit"
          onClick={() =>
            handleOpenNewTab('https://www.linkedin.com/in/phong-dang-0ba41317b')
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 50 50"
            width="1em"
            height="1em"
          >
            {' '}
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
          </svg>
          @phongdang707
        </Button>
        <Button
          className="pd-btn-link gap-2 pd-btn-primary hover:pd-btn-primary w-fit"
          onClick={() => handleOpenNewTab('https://github.com/phongdang707')}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
          </svg>
          @phongdang707
        </Button>
        <Button
          className="pd-btn-link gap-2 pd-btn-primary hover:pd-btn-primary w-fit"
          onClick={() =>
            handleOpenNewTab('https://www.npmjs.com/~phongdang707')
          }
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="512" height="512" rx="15%" fill="#fff" />
            <path
              fill="none"
              stroke="#cb3837"
              stroke-width="22"
              d="m234 311h213v-112H65v112h113V210m-12 123h90M133 232v68m112-68v45m45-67v90m67-68v68m45-68v68"
            />
          </svg>
          @phongdang707
        </Button>
        <Button
          className="pd-btn-link gap-2 pd-btn-primary hover:pd-btn-primary w-fit"
          onClick={() =>
            handleOpenNewTab('https://hub.docker.com/u/phongdang707')
          }
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="512" height="512" rx="15%" fill="#fff" />
            <path
              stroke="#066da5"
              stroke-width="38"
              d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
            />
            <path
              fill="#066da5"
              d="m472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"
            />
          </svg>
          @phongdang707
        </Button>

        <Button className="pd-btn-link gap-2 pd-btn-primary hover:pd-btn-primary w-fit">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
          </svg>
          @phongdang707
        </Button>
      </div>
    </div>
  );
};
