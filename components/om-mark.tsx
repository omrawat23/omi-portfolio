export function OmMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 24"
      fill="currentColor"
      {...props}
    >
      {/* O - rounded like a circle */}
      <rect x="4" y="5" width="2" height="2"/>
      <rect x="5" y="5" width="2" height="2"/>
      <rect x="7" y="5" width="2" height="2"/>
      <rect x="2" y="7" width="2" height="2"/>
      <rect x="9" y="7" width="2" height="2"/>
      <rect x="2" y="9" width="2" height="2"/>
      <rect x="9" y="9" width="2" height="2"/>
      <rect x="2" y="11" width="2" height="2"/>
      <rect x="9" y="11" width="2" height="2"/>
      <rect x="2" y="13" width="2" height="2"/>
      <rect x="9" y="13" width="2" height="2"/>
      <rect x="4" y="15" width="2" height="2"/>
      <rect x="5" y="15" width="2" height="2"/>
      <rect x="7" y="15" width="2" height="2"/>
      
      {/* M - with proper diagonals */}
      <rect x="15" y="5" width="2" height="2"/>
      <rect x="24" y="5" width="2" height="2"/>
      <rect x="15" y="7" width="2" height="2"/>
      <rect x="17" y="7" width="2" height="2"/>
      <rect x="22" y="7" width="2" height="2"/>
      <rect x="24" y="7" width="2" height="2"/>
      <rect x="15" y="9" width="2" height="2"/>
      <rect x="19" y="9" width="2" height="2"/>
      <rect x="20" y="9" width="2" height="2"/>
      <rect x="24" y="9" width="2" height="2"/>
      <rect x="15" y="11" width="2" height="2"/>
      <rect x="19" y="11" width="2" height="2"/>
      <rect x="20" y="11" width="2" height="2"/>
      <rect x="24" y="11" width="2" height="2"/>
      <rect x="15" y="13" width="2" height="2"/>
      <rect x="19" y="13" width="2" height="2"/>
      <rect x="20" y="13" width="2" height="2"/>
      <rect x="24" y="13" width="2" height="2"/>
      <rect x="15" y="15" width="2" height="2"/>
      <rect x="19" y="15" width="2" height="2"/>
      <rect x="20" y="15" width="2" height="2"/>
      <rect x="24" y="15" width="2" height="2"/>
      
      {/* I */}
      <rect x="30" y="5" width="2" height="2"/>
      <rect x="32" y="5" width="2" height="2"/>
      <rect x="34" y="5" width="2" height="2"/>
      <rect x="32" y="7" width="2" height="2"/>
      <rect x="32" y="9" width="2" height="2"/>
      <rect x="32" y="11" width="2" height="2"/>
      <rect x="32" y="13" width="2" height="2"/>
      <rect x="30" y="15" width="2" height="2"/>
      <rect x="32" y="15" width="2" height="2"/>
      <rect x="34" y="15" width="2" height="2"/>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 24" fill="${color}"><rect x="3" y="5" width="2" height="2"/><rect x="5" y="5" width="2" height="2"/><rect x="7" y="5" width="2" height="2"/><rect x="2" y="7" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="2" y="9" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="2" y="11" width="2" height="2"/><rect x="9" y="11" width="2" height="2"/><rect x="2" y="13" width="2" height="2"/><rect x="9" y="13" width="2" height="2"/><rect x="3" y="15" width="2" height="2"/><rect x="5" y="15" width="2" height="2"/><rect x="7" y="15" width="2" height="2"/><rect x="15" y="5" width="2" height="2"/><rect x="24" y="5" width="2" height="2"/><rect x="15" y="7" width="2" height="2"/><rect x="17" y="7" width="2" height="2"/><rect x="22" y="7" width="2" height="2"/><rect x="24" y="7" width="2" height="2"/><rect x="15" y="9" width="2" height="2"/><rect x="19" y="9" width="2" height="2"/><rect x="20" y="9" width="2" height="2"/><rect x="24" y="9" width="2" height="2"/><rect x="15" y="11" width="2" height="2"/><rect x="19" y="11" width="2" height="2"/><rect x="20" y="11" width="2" height="2"/><rect x="24" y="11" width="2" height="2"/><rect x="15" y="13" width="2" height="2"/><rect x="19" y="13" width="2" height="2"/><rect x="20" y="13" width="2" height="2"/><rect x="24" y="13" width="2" height="2"/><rect x="15" y="15" width="2" height="2"/><rect x="19" y="15" width="2" height="2"/><rect x="20" y="15" width="2" height="2"/><rect x="24" y="15" width="2" height="2"/><rect x="30" y="5" width="2" height="2"/><rect x="32" y="5" width="2" height="2"/><rect x="34" y="5" width="2" height="2"/><rect x="32" y="7" width="2" height="2"/><rect x="32" y="9" width="2" height="2"/><rect x="32" y="11" width="2" height="2"/><rect x="32" y="13" width="2" height="2"/><rect x="30" y="15" width="2" height="2"/><rect x="32" y="15" width="2" height="2"/><rect x="34" y="15" width="2" height="2"/></svg>`;
}

export function OmWordMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64ZM768 32h32v32h-32zM672 0h96v32h-96zM640 32h32v192h-32zM672 224h96v32h-96zM768 192h32v32h-32zM832 0h32v256h-32zM864 64h96v32h-96zM960 96h32v160h-32zM1056 64h96v32h-96zM1024 96h32v128h-32zM1056 224h64v32h-64zM1120 192h32v32h-32zM1152 64h32v192h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 0h32v256h-32zM1440 64h96v32h-96zM1536 96h32v160h-32zM1632 0h64v32h-64zM1696 32h32v32h-32zM1696 192h32v32h-32zM1728 64h32v128h-32zM1632 224h64v32h-64zM1600 0h32v256h-32zM1824 64h96v32h-96zM1792 96h32v128h-32zM1824 224h64v32h-64zM1888 192h32v32h-32zM1920 64h32v192h-32zM1984 64h32v32h-32zM2016 64h32v192h-32zM2016 0h32v32h-32z"
      />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><path fill="${color}" d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64ZM768 32h32v32h-32zM672 0h96v32h-96zM640 32h32v192h-32zM672 224h96v32h-96zM768 192h32v32h-32zM832 0h32v256h-32zM864 64h96v32h-96zM960 96h32v160h-32zM1056 64h96v32h-96zM1024 96h32v128h-32zM1056 224h64v32h-64zM1120 192h32v32h-32zM1152 64h32v192h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 0h32v256h-32zM1440 64h96v32h-96zM1536 96h32v160h-32zM1632 0h64v32h-64zM1696 32h32v32h-32zM1696 192h32v32h-32zM1728 64h32v128h-32zM1632 224h64v32h-64zM1600 0h32v256h-32zM1824 64h96v32h-96zM1792 96h32v128h-32zM1824 224h64v32h-64zM1888 192h32v32h-32zM1920 64h32v192h-32zM1984 64h32v32h-32zM2016 64h32v192h-32zM2016 0h32v32h-32z"/></svg>`;
}
