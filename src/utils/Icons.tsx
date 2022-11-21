import { SVGProps } from "react";

export function Checkmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M9.854 3.146a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L5 7.293l4.146-4.147a.5.5 0 0 1 .708 0Z"
      ></path>
    </svg>
  );
}

export function Bell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function Avatar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5Z"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37ZM29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function AvatarNotification(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37ZM29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
        className="clr-i-outline--badged clr-i-outline-path-1--badged"
      ></path>
      <path
        fill="currentColor"
        d="M18 17a7 7 0 0 0 6.85-5.56a7.4 7.4 0 0 1-2.24-6.69A7 7 0 1 0 18 17Zm0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5Z"
        className="clr-i-outline--badged clr-i-outline-path-2--badged"
      ></path>
      <circle
        cx="30"
        cy="6"
        r="5"
        fill="currentColor"
        className="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"
      ></circle>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M8 14h2v2H8z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <path
        fill="currentColor"
        d="M14 14h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-3"
      ></path>
      <path
        fill="currentColor"
        d="M20 14h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-4"
      ></path>
      <path
        fill="currentColor"
        d="M26 14h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-5"
      ></path>
      <path
        fill="currentColor"
        d="M8 19h2v2H8z"
        className="clr-i-outline clr-i-outline-path-6"
      ></path>
      <path
        fill="currentColor"
        d="M14 19h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-7"
      ></path>
      <path
        fill="currentColor"
        d="M20 19h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-8"
      ></path>
      <path
        fill="currentColor"
        d="M26 19h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-9"
      ></path>
      <path
        fill="currentColor"
        d="M8 24h2v2H8z"
        className="clr-i-outline clr-i-outline-path-10"
      ></path>
      <path
        fill="currentColor"
        d="M14 24h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-11"
      ></path>
      <path
        fill="currentColor"
        d="M20 24h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-12"
      ></path>
      <path
        fill="currentColor"
        d="M26 24h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-13"
      ></path>
      <path
        fill="currentColor"
        d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
        className="clr-i-outline clr-i-outline-path-14"
      ></path>
      <path
        fill="currentColor"
        d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
        className="clr-i-outline clr-i-outline-path-15"
      ></path>
      <path
        fill="currentColor"
        d="M13 6h10v2H13z"
        className="clr-i-outline clr-i-outline-path-16"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function GridView(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 36 36" {...props}>
      <rect
        width="12"
        height="12"
        x="4"
        y="4"
        fill="currentColor"
        className="clr-i-solid clr-i-solid-path-1"
        rx="2"
        ry="2"
      ></rect>
      <rect
        width="12"
        height="12"
        x="20"
        y="4"
        fill="currentColor"
        className="clr-i-solid clr-i-solid-path-2"
        rx="2"
        ry="2"
      ></rect>
      <rect
        width="12"
        height="12"
        x="4"
        y="20"
        fill="currentColor"
        className="clr-i-solid clr-i-solid-path-3"
        rx="2"
        ry="2"
      ></rect>
      <rect
        width="12"
        height="12"
        x="20"
        y="20"
        fill="currentColor"
        className="clr-i-solid clr-i-solid-path-4"
        rx="2"
        ry="2"
      ></rect>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function DepartamentLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M15 6a3.001 3.001 0 0 1-2 2.83V11h3a3 3 0 0 1 3 3v1.17a3.001 3.001 0 1 1-2 0V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1.17a3.001 3.001 0 1 1-2 0V14a3 3 0 0 1 3-3h3V8.83A3.001 3.001 0 1 1 15 6Zm-3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"
        ></path>
      </g>
    </svg>
  );
}

export function Bookmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22V5Zm3-1a1 1 0 0 0-1 1v15.057l5.128-3.663a1.5 1.5 0 0 1 1.744 0L18 20.057V5a1 1 0 0 0-1-1H7Z"
        ></path>
      </g>
    </svg>
  );
}

export function BookmarkFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22V5Z"
        ></path>
      </g>
    </svg>
  );
}

export function Shadow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" {...props}>
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path
          d="M6.783 13.376c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248l-.434-.248Z"
          opacity=".05"
        ></path>
        <path
          d="M7.282 13.477c1.957-3.482 1.957-8.472 0-11.955l.436-.244c2.043 3.634 2.043 8.81 0 12.444l-.436-.245Z"
          opacity=".1"
        ></path>
        <path
          d="M7.821 13.506c1.904-3.51 1.905-8.492.004-12.005l.44-.238c1.981 3.662 1.98 8.822-.004 12.482l-.44-.239Z"
          opacity=".15"
        ></path>
        <path
          d="M8.413 13.429c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309l-.445-.227Z"
          opacity=".2"
        ></path>
        <path
          d="M9.024 13.296c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.693 3.595 1.69 8.412-.005 12.005l-.453-.213Z"
          opacity=".25"
        ></path>
        <path
          d="M9.668 13.066c1.442-3.37 1.443-7.754.003-11.125l.46-.196c1.493 3.496 1.492 8.022-.003 11.517l-.46-.197Z"
          opacity=".3"
        ></path>
        <path
          d="M10.331 12.746c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.003 10.836l-.468-.177Z"
          opacity=".35"
        ></path>
        <path
          d="M11.015 12.299c.979-3.002.98-6.586.003-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.898l-.476-.155Z"
          opacity=".4"
        ></path>
        <path
          d="M11.721 11.668c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583l-.484-.128Z"
          opacity=".45"
        ></path>
        <path
          d="M12.443 10.752c.41-2.114.41-4.391 0-6.505l.49-.095a17.888 17.888 0 0 1 .001 6.695l-.49-.095Z"
          opacity=".5"
        ></path>
        <path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Z"></path>
      </g>
    </svg>
  );
}

export function FingerPrint(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M72 128a136.1 136.1 0 0 1-14.1 60.5a8.1 8.1 0 0 1-7.2 4.4a9.4 9.4 0 0 1-3.6-.8a8.1 8.1 0 0 1-3.6-10.7A119 119 0 0 0 56 128a71.7 71.7 0 0 1 27-56.2a8 8 0 1 1 10 12.5A55.9 55.9 0 0 0 72 128Zm56-8a8 8 0 0 0-8 8a183.3 183.3 0 0 1-23 89.1a8.1 8.1 0 0 0 3.2 10.9a7.5 7.5 0 0 0 3.8 1a8 8 0 0 0 7-4.1a199.8 199.8 0 0 0 25-96.9a8 8 0 0 0-8-8Zm0-32a40.1 40.1 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.3 214.3 0 0 1-20.5 92a7.9 7.9 0 0 0 3.8 10.6a7.1 7.1 0 0 0 3.4.8a8.1 8.1 0 0 0 7.3-4.6a230 230 0 0 0 22-98.8a40 40 0 0 0-40-40Zm0-64A104.2 104.2 0 0 0 24 128a88 88 0 0 1-5 29.3a7.9 7.9 0 0 0 4.9 10.2a8 8 0 0 0 10.2-4.8A104.5 104.5 0 0 0 40 128a88 88 0 0 1 176 0a284.4 284.4 0 0 1-5.3 54.5a8 8 0 0 0 6.3 9.3a4.4 4.4 0 0 0 1.6.2a7.9 7.9 0 0 0 7.8-6.5A298.1 298.1 0 0 0 232 128A104.1 104.1 0 0 0 128 24ZM94.4 152.2a8 8 0 0 0-9.4 6.2a153.2 153.2 0 0 1-17.2 45.4a8.1 8.1 0 0 0 2.9 11a8.2 8.2 0 0 0 4 1a7.9 7.9 0 0 0 6.9-4a164.4 164.4 0 0 0 19.1-50.2a8.1 8.1 0 0 0-6.3-9.4ZM128 56a68 68 0 0 0-9 .6a8 8 0 1 0 2 15.8a54.8 54.8 0 0 1 7-.4a56 56 0 0 1 56 56a245.7 245.7 0 0 1-1.9 31a7.9 7.9 0 0 0 6.9 8.9h1a8.1 8.1 0 0 0 8-7a279.7 279.7 0 0 0 2-33A72.1 72.1 0 0 0 128 56Zm57.9 128.3a7.9 7.9 0 0 0-9.7 5.7c-1.5 5.7-3.2 11.4-5 17a8 8 0 0 0 5 10.1a8 8 0 0 0 10.1-5.1q3-8.9 5.4-18a8 8 0 0 0-5.8-9.7Z"
      ></path>
    </svg>
  );
}
