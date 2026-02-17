import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yılmaz & Kaya Hukuk Bürosu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Inter",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 24 }}>
        Yılmaz & Kaya
      </div>
      <div style={{ fontSize: 48, marginBottom: 16 }}>Hukuk Bürosu</div>
      <div style={{ fontSize: 28, opacity: 0.9 }}>İstanbul • Şişli</div>
      <div style={{ fontSize: 24, marginTop: 40, opacity: 0.8 }}>
        Profesyonel Hukuki Danışmanlık
      </div>
    </div>,
    {
      ...size,
    },
  );
}
