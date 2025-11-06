import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(164, 89, 225, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(240, 205, 255, 0.15) 0%, transparent 50%)',
            position: 'relative',
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <svg width="120" height="115" viewBox="0 0 264 253" fill="none">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#A459E1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#F0CDFF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M141.43 0H122.571V104.317L45.3289 30.5536L31.9949 43.2871L109.237 117.05H0V135.058H109.237L31.9949 208.821L45.3289 221.554L122.571 147.791V252.109H141.43V147.791L218.671 221.554L232.004 208.821L154.763 135.058H264V117.05H154.763L232.004 43.287L218.671 30.5536L141.43 104.317V0Z"
                fill="url(#grad1)"
              />
            </svg>
          </div>

          {/* Main Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 80px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #F0CDFF 0%, #A459E1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.1,
                marginBottom: '30px',
                maxWidth: '1000px',
              }}
            >
              Elevate every prompt into a breakthrough.
            </h1>

            <p
              style={{
                fontSize: '28px',
                color: '#9ca3af',
                maxWidth: '800px',
                lineHeight: 1.4,
                marginBottom: '40px',
              }}
            >
              Intelligent prompt enhancement for VS Code & GitHub Copilot
            </p>

            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'rgba(164, 89, 225, 0.15)',
                border: '2px solid rgba(240, 205, 255, 0.3)',
                borderRadius: '999px',
              }}
            >
              <span style={{ fontSize: '24px' }}>✨</span>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #F0CDFF 0%, #A459E1 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                100% Free & Open Source
              </span>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #A459E1 0%, #F0CDFF 100%)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image generation error:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
