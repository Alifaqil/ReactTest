export default function Title({ title, subtitle, style }) {
    return (
      <div>
        <h1 style={style}>{title}</h1>
        <p style={style}>{subtitle}</p>
      </div>
    );
  }
  