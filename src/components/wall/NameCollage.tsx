import React from 'react';

interface LetterTileInfo {
  char: string;
  bg: string;
  color: string;
  font: string;
  rotateDeg: number;
  clip: string;
  isCream?: boolean;
}

const LETTER_TILES_RESHMA: LetterTileInfo[] = [
  {
    char: 'R',
    bg: '#F6F1EA',
    color: '#1B1A1F',
    font: 'font-archivo font-black',
    rotateDeg: -3.5,
    clip: 'polygon(3% 0%, 97% 3%, 100% 95%, 97% 100%, 3% 97%, 0% 4%)',
    isCream: true,
  },
  {
    char: 'E',
    bg: '#9570C6',
    color: '#FFFFFF',
    font: 'font-dm-serif font-bold',
    rotateDeg: 2.5,
    clip: 'polygon(1% 2%, 97% 0%, 100% 95%, 96% 99%, 0% 96%, 2% 4%)',
  },
  {
    char: 'S',
    bg: '#DDD0F3',
    color: '#1B1A1F',
    font: 'font-bebas font-normal',
    rotateDeg: -4,
    clip: 'polygon(4% 1%, 99% 4%, 97% 98%, 94% 96%, 1% 100%, 0% 7%)',
  },
  {
    char: 'H',
    bg: '#18171B',
    color: '#F6F1EA',
    font: 'font-archivo font-black',
    rotateDeg: 3.5,
    clip: 'polygon(0% 1%, 96% 0%, 99% 97%, 97% 100%, 2% 98%, 1% 5%)',
  },
  {
    char: 'M',
    bg: '#F6F1EA',
    color: '#1B1A1F',
    font: 'font-dm-serif font-bold',
    rotateDeg: -2.5,
    clip: 'polygon(2% 0%, 98% 2%, 96% 97%, 99% 100%, 1% 97%, 0% 3%)',
    isCream: true,
  },
  {
    char: 'A',
    bg: '#9570C6',
    color: '#FFFFFF',
    font: 'font-bebas font-normal',
    rotateDeg: 4,
    clip: 'polygon(1% 3%, 97% 0%, 100% 96%, 94% 98%, 2% 100%, 0% 94%)',
  },
];

const LETTER_TILES_ANGAJALA: LetterTileInfo[] = [
  {
    char: 'A',
    bg: '#DDD0F3',
    color: '#1B1A1F',
    font: 'font-archivo font-black',
    rotateDeg: -3,
    clip: 'polygon(3% 1%, 97% 0%, 99% 97%, 96% 100%, 1% 97%, 0% 5%)',
  },
  {
    char: 'N',
    bg: '#18171B',
    color: '#F6F1EA',
    font: 'font-dm-serif font-bold',
    rotateDeg: 3,
    clip: 'polygon(1% 0%, 98% 3%, 97% 98%, 93% 97%, 2% 100%, 0% 6%)',
  },
  {
    char: 'G',
    bg: '#F6F1EA',
    color: '#1B1A1F',
    font: 'font-bebas font-normal',
    rotateDeg: -4.5,
    clip: 'polygon(2% 2%, 99% 0%, 97% 96%, 99% 100%, 0% 97%, 2% 4%)',
    isCream: true,
  },
  {
    char: 'A',
    bg: '#9570C6',
    color: '#FFFFFF',
    font: 'font-archivo font-black',
    rotateDeg: 2,
    clip: 'polygon(0% 1%, 96% 2%, 100% 98%, 95% 97%, 2% 99%, 1% 3%)',
  },
  {
    char: 'J',
    bg: '#DDD0F3',
    color: '#1B1A1F',
    font: 'font-dm-serif font-bold',
    rotateDeg: -3.5,
    clip: 'polygon(2% 0%, 98% 3%, 96% 98%, 94% 100%, 1% 96%, 0% 6%)',
  },
  {
    char: 'A',
    bg: '#18171B',
    color: '#F6F1EA',
    font: 'font-bebas font-normal',
    rotateDeg: 3.5,
    clip: 'polygon(1% 2%, 97% 0%, 99% 97%, 96% 99%, 0% 98%, 3% 4%)',
  },
  {
    char: 'L',
    bg: '#F6F1EA',
    color: '#1B1A1F',
    font: 'font-archivo font-black',
    rotateDeg: -2.5,
    clip: 'polygon(3% 0%, 98% 2%, 97% 98%, 95% 97%, 2% 100%, 0% 4%)',
    isCream: true,
  },
  {
    char: 'A',
    bg: '#9570C6',
    color: '#FFFFFF',
    font: 'font-dm-serif font-bold',
    rotateDeg: 4.5,
    clip: 'polygon(0% 2%, 96% 0%, 100% 95%, 97% 100%, 1% 97%, 2% 5%)',
  },
];

interface NameCollageProps {
  animated?: boolean;
}

export function NameCollage({ animated = false }: NameCollageProps) {
  return (
    <div className="relative flex flex-col items-center justify-center select-none z-30 pointer-events-auto">
      {/* Crown doodle in faded gold */}
      <div
        className={`absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 pointer-events-none z-30 transition-opacity duration-500 ${
          animated ? 'opacity-90' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1100ms' }}
      >
        <svg
          width="54"
          height="32"
          viewBox="0 0 54 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 sm:w-13 md:w-14 h-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
          aria-hidden="true"
        >
          <path
            d="M 6 26 L 10 9 L 21 19 L 27 5 L 34 19 L 44 9 L 48 26 Z"
            stroke="#E3C46C"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="8" r="1.5" fill="#E3C46C" />
          <circle cx="27" cy="4" r="1.8" fill="#E3C46C" />
          <circle cx="44" cy="8" r="1.5" fill="#E3C46C" />
          <path
            d="M 8 28 C 20 27, 34 27, 46 28"
            stroke="#E3C46C"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ROW 1: RESHMA */}
      <div className="flex items-center justify-center gap-[clamp(3px,0.5vw,8px)] mb-[clamp(4px,0.8vw,10px)]">
        {LETTER_TILES_RESHMA.map((tile, i) => {
          const delayMs = 300 + i * 60;
          return (
            <div
              key={tile.char + i}
              className="group relative cursor-default"
              style={{
                width: 'clamp(44px, 6.2vw, 96px)',
                height: 'calc(1.2 * clamp(44px, 6.2vw, 96px))',
              }}
            >
              <div
                className={`w-full h-full flex items-center justify-center shadow-[2px_5px_14px_rgba(0,0,0,0.6)] ${tile.font} transition-all duration-150 ease-out group-hover:-translate-y-[3px]`}
                style={{
                  backgroundColor: tile.bg,
                  color: tile.color,
                  clipPath: tile.clip,
                  transform: animated
                    ? `rotate(${tile.rotateDeg}deg)`
                    : `translateY(-24px) rotate(${tile.rotateDeg + (i % 2 === 0 ? 10 : -10)}deg)`,
                  opacity: animated ? 1 : 0,
                  transition: `transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delayMs}ms, opacity 400ms ease ${delayMs}ms`,
                }}
              >
                {/* On hover, adds +3deg extra tilt */}
                <div
                  className="w-full h-full flex items-center justify-center transition-transform duration-150 ease-out group-hover:rotate-[3deg]"
                >
                  <span
                    className="select-none leading-none"
                    style={{ fontSize: 'calc(clamp(44px, 6.2vw, 96px) * 0.72)' }}
                  >
                    {tile.char}
                  </span>
                </div>

                {/* Tea-stained aging overlay on CREAM tiles */}
                {tile.isCream && (
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-35"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 25% 20%, rgba(181, 142, 95, 0.45) 0%, transparent 45%),
                        radial-gradient(circle at 80% 85%, rgba(140, 100, 60, 0.35) 0%, transparent 55%),
                        linear-gradient(to bottom, rgba(160, 120, 80, 0.15), transparent 30%, rgba(130, 90, 50, 0.2))
                      `,
                    }}
                  />
                )}

                {/* Subtle paper grain */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ROW 2: ANGAJALA */}
      <div className="flex items-center justify-center gap-[clamp(3px,0.5vw,8px)] mb-[clamp(8px,1.2vw,16px)]">
        {LETTER_TILES_ANGAJALA.map((tile, i) => {
          const delayMs = 300 + (6 + i) * 60; // staggered after RESHMA
          return (
            <div
              key={tile.char + i}
              className="group relative cursor-default"
              style={{
                width: 'clamp(36px, 5vw, 78px)',
                height: 'calc(1.2 * clamp(36px, 5vw, 78px))',
              }}
            >
              <div
                className={`w-full h-full flex items-center justify-center shadow-[1px_4px_10px_rgba(0,0,0,0.55)] ${tile.font} transition-all duration-150 ease-out group-hover:-translate-y-[3px]`}
                style={{
                  backgroundColor: tile.bg,
                  color: tile.color,
                  clipPath: tile.clip,
                  transform: animated
                    ? `rotate(${tile.rotateDeg}deg)`
                    : `translateY(-24px) rotate(${tile.rotateDeg + (i % 2 === 0 ? 10 : -10)}deg)`,
                  opacity: animated ? 1 : 0,
                  transition: `transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delayMs}ms, opacity 400ms ease ${delayMs}ms`,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center transition-transform duration-150 ease-out group-hover:rotate-[3deg]"
                >
                  <span
                    className="select-none leading-none"
                    style={{ fontSize: 'calc(clamp(36px, 5vw, 78px) * 0.72)' }}
                  >
                    {tile.char}
                  </span>
                </div>

                {tile.isCream && (
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-35"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 30% 25%, rgba(181, 142, 95, 0.45) 0%, transparent 45%),
                        radial-gradient(circle at 75% 80%, rgba(140, 100, 60, 0.35) 0%, transparent 55%),
                        linear-gradient(to bottom, rgba(160, 120, 80, 0.15), transparent 30%, rgba(130, 90, 50, 0.2))
                      `,
                    }}
                  />
                )}

                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* TORN CREAM STRIP: "PRODUCT" on one line, "DESIGNER" on the next */}
      <div
        className={`relative bg-[#F6F1EA] text-[#1B1A1F] px-5 sm:px-7 py-1.5 sm:py-2 shadow-[2px_6px_12px_rgba(0,0,0,0.5)] transform -rotate-1 transition-all duration-600 ${
          animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          transitionDelay: '1100ms',
          clipPath:
            'polygon(0% 4%, 3% 1%, 97% 0%, 100% 5%, 98% 95%, 95% 99%, 4% 98%, 0% 92%)',
        }}
      >
        <div className="text-center font-archivo tracking-[0.28em] uppercase leading-tight select-none">
          <div className="text-[11px] sm:text-[13px] md:text-[14px] font-black text-[#1B1A1F]">
            PRODUCT
          </div>
          <div className="text-[11px] sm:text-[13px] md:text-[14px] font-black text-[#1B1A1F]">
            DESIGNER
          </div>
        </div>

        {/* Small strip of old masking tape on one end */}
        <div
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-6 bg-[#E4D8BE]/80 backdrop-blur-[1px] -rotate-12 shadow-xs"
          style={{ clipPath: 'polygon(5% 0%, 100% 10%, 90% 100%, 0% 95%)' }}
        />

        {/* Tea-stain gradient overlay on cream strip */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(181, 142, 95, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}
