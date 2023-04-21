import React from 'react';

// 휴가 기다리는 미어캣 - 마이페이지, 매니저페이지

const WaitVacation = () => {
  return (
    <svg viewBox="0 0 242.16 84" width={'250px'} height={'85px'}>
      <style>{`.cls-1{fill:#fff;}.cls-2{fill:#d87e78;}.cls-3{fill:#c63525;}`}</style>
      <path
        className="cls-2"
        d="M114.92,52.64c4.56,0,8.63-3.99,9.15-8.52s-2.26-9.12-6.33-11.19c-1.07-.54-2.24-.93-3.44-.92"
      />
      <path
        className="cls-2"
        d="M40.48,45.04c-4.77-1.66-7.58-7.3-6.48-12.23s5.67-8.73,10.67-9.41c1.32-.18,2.69-.17,3.93,.28"
      />
      <path
        className="cls-2"
        d="M99.11,37.02c1.51,1.19,2.91,2.56,3.82,4.25s1.28,3.74,.67,5.56c-1,2.98-4.42,4.62-7.56,4.49s-6.05-1.64-8.74-3.27c-1.3-.79-2.61-1.64-3.56-2.84-1.47-1.86-1.9-4.51-1.07-6.74,2.7-7.32,11.75-5.16,16.45-1.45h-.01Z"
      />
      <path
        className="cls-2"
        d="M56.74,37.02c-1.51,1.19-2.91,2.56-3.82,4.25s-1.28,3.74-.67,5.56c1,2.98,4.42,4.62,7.56,4.49s6.05-1.64,8.74-3.27c1.3-.79,2.61-1.64,3.56-2.84,1.47-1.86,1.9-4.51,1.07-6.74-2.7-7.32-11.75-5.16-16.45-1.45h0Z"
      />
      <path
        className="cls-3"
        d="M242.18,.02H.2V83.84H54.19c-.15,1.23,1.73,1.75,1.93,.49,.03-.16,.06-.33,.08-.49H242.18V.02ZM42.14,39.88c.04-3.72,2.14-6.52,4.16-9.46,1.92-2.78,3.41-5.64,6.45-7.38,2.61-1.5,5.66-1.96,8.61-2.26,3.62-.36,7.25-.64,10.87-1,7.34-.73,14.57-1.11,21.77,.8,3.38,.9,6.72,2.08,10.05,3.15,2.59,.83,5.44,1.8,7.28,3.92,2.26,2.61,1.85,6.51,2.1,9.73,.25,3.22,.55,6.21,.8,9.32,.13,1.65,.35,3.49,.32,5.3-.44,.27-.46,.95-.06,1.25-.12,1.44-.44,2.83-1.15,4.04-.8,1.37-2.05,2.4-3.36,3.26-3.01,1.97-6.34,3.58-9.67,4.92-3.1,1.24-6.29,2.17-9.54,2.82-1.73-2.82-3.21-5.82-5.13-8.5-1.48-2.07-3.84-4.48-6.4-2.36-.48,.4-.83,.85-1.08,1.33-1.62-2.29-5-2.3-7.22-.8-2.76,1.86-4.35,5.31-5.99,8.1-.22,.38-.42,.76-.64,1.14-1.46-.41-2.91-.88-4.32-1.44-.22-.33-.64-.49-1.03-.44-1.42-.6-2.81-1.25-4.15-2.01-3.02-1.72-5.99-3.89-8.01-6.76-2.02-2.87-3.23-6.84-3.97-10.34-.43-2.06-.65-4.14-.69-6.24,0-.03,.02-.05,.02-.08h-.02Zm-1.1,4.71c-.08-.12-.19-.22-.36-.28-4.81-1.76-7.25-7.58-5.67-12.34,1.69-5.08,8.03-9.3,13.39-7.57,.11,.03,.2,.04,.3,.03-.32,.34-.62,.7-.92,1.08-1.13,1.46-2.02,3.1-3.07,4.62-1.05,1.52-2.16,3.03-2.93,4.72-.71,1.55-1.07,3.16-1.11,4.86-.01,.05-.03,.1-.03,.16,.02,1.59,.16,3.17,.4,4.72Zm38.72,15.57c.2-.7,.77-1.53,1.57-1.58s1.37,.66,1.81,1.18c2.11,2.5,3.57,5.55,5.21,8.36,.11,.18,.22,.36,.32,.54-2.18,.35-4.38,.55-6.59,.63-.37-1.12-.74-2.23-1.11-3.35-.56-1.7-1.72-3.95-1.21-5.78Zm.22,9.16c-.59,0-1.18,0-1.77-.02-.34-.01-.68-.04-1.01-.06,.06-.26,.12-.52,.19-.78,.32-1.13,.79-2.28,1.16-3.44,.12,.37,.25,.74,.36,1.08,.36,1.07,.71,2.15,1.07,3.22Zm-4.61-1.06c-.08,.28-.14,.57-.2,.86-2.99-.25-5.99-.7-8.91-1.4,1.16-2.08,2.36-4.16,3.75-6.07,.79-1.09,1.8-2.13,3.11-2.55,1.23-.4,2.7-.25,3.47,.9,1.63,2.47-.57,5.82-1.22,8.26Zm-15.5-.93c1.21,.45,2.44,.85,3.69,1.2-1.7,3.01-3.35,6.06-4.89,9.16-.57,1.15,1.15,2.16,1.73,1.01h-.01c1.49-2.99,3.05-5.94,4.68-8.85,.15-.27,.3-.54,.45-.8,1.98,.48,3.99,.85,5.98,1.13,1.13,.16,2.26,.28,3.39,.38-.44,2.62-.63,5.29-1.65,7.78-.49,1.19,1.45,1.71,1.93,.53,1.07-2.61,1.23-5.42,1.72-8.17,1.2,.07,2.39,.11,3.59,.11,.81,2.43,1.61,4.85,2.42,7.28,.4,1.22,2.34,.69,1.93-.53-.76-2.27-1.51-4.54-2.26-6.81,2.33-.09,4.66-.3,6.97-.69,1.35,2.12,2.87,4.13,4.79,5.77,.97,.84,2.39-.57,1.41-1.41-1.62-1.39-2.92-3.03-4.08-4.77,1.32-.28,2.64-.58,3.94-.97,1.57-.46,3.11-1.01,4.63-1.6,2.92,5.73,6.64,11.03,11.03,15.73,0,0,0,0,.01,.01H56.38c.88-5.23,2.03-10.4,3.49-15.5Zm181.31,15.5H112.6c.36-.35,.5-.94,.06-1.42-4.21-4.51-7.76-9.58-10.59-15.08,1.59-.68,3.15-1.41,4.68-2.21,2.23-1.17,4.6-2.39,6.41-4.18,1.86-1.85,2.55-4.18,2.75-6.63,5.02-.64,9.02-5.31,8.97-10.41-.06-5.37-4.69-11.39-10.4-11.63-.05-.33-.1-.66-.17-.99-1.49-6.24-8.71-7.59-13.94-9.24-3.87-1.22-7.62-2.49-11.67-3.03-3.79-.5-7.61-.45-11.42-.17-4.17,.31-8.32,.82-12.49,1.16-3.22,.26-6.52,.43-9.62,1.4-2.32,.73-4.25,1.85-5.87,3.41,.06-.34-.08-.72-.5-.86-6.16-1.99-13.3,2.79-15.24,8.62s1.17,12.15,6.72,14.19c.45,.16,.78-.11,.88-.47,.42,2.44,1.09,4.84,1.99,7.16,1.29,3.36,2.97,6.14,5.72,8.52,2.73,2.37,5.83,4.2,9.13,5.61-1.54,5.34-2.75,10.77-3.64,16.25H1.2V1.02H241.18V82.84ZM114.66,32.79c4.8,.34,8.66,5.54,8.72,10.12,.06,4.33-3.22,8.23-7.39,8.88,0-.49,0-.99-.02-1.48-.1-2.84-.41-5.67-.66-8.5-.17-1.88-.33-3.75-.46-5.63-.07-1.08-.1-2.24-.19-3.39Z"
      />
      <path
        className="cls-3"
        d="M88.82,49.78c4.13,2.23,9.41,3.55,13.39,.27,2.02-1.66,2.79-4.22,2.27-6.76-.59-2.84-2.64-5.05-4.83-6.81-5.19-4.03-14.88-6.05-17.7,1.78-.8,2.21-.5,4.81,.77,6.79,1.4,2.18,3.88,3.53,6.1,4.73Zm-5.62-10.5c.79-3.02,3.32-4.85,6.38-4.93s6.51,1.25,9.01,3.19h-.01c1.69,1.36,3.34,2.94,4.12,5.01,.78,2.07,.59,4.27-.93,5.87-3.05,3.21-7.86,2.25-11.38,.49-3.75-1.88-8.48-4.68-7.19-9.63Z"
      />
      <path
        className="cls-3"
        d="M52.54,48.92c3.01,3.91,8.45,3.61,12.53,1.84,4.46-1.94,9.83-5.1,9.24-10.72-.39-3.77-3.31-6.65-7.03-7.11-3.9-.48-7.98,1.16-11.02,3.52-.02,.01-.03,.01-.05,.03h0c-1.95,1.57-3.73,3.43-4.56,5.84-.77,2.22-.56,4.72,.89,6.6Zm.36-5.56c.62-2.44,2.44-4.26,4.34-5.79,0,0,.02,0,.03-.02,4.06-3.16,12.04-5.42,14.9,.43,.93,1.91,.91,4.19-.16,6.04-1.07,1.85-3.23,3.06-5.09,4.11-3.55,2.01-8.05,3.64-11.8,1.16-2-1.33-2.81-3.61-2.22-5.93Z"
      />
      <path
        className="cls-3"
        d="M77.04,44.03c.57,.11,1.17,.09,1.71-.12,.1-.02,.18-.07,.26-.13,.08-.05,.15-.12,.19-.21l.08-.18c.03-.1,.04-.2,.01-.3-.02-.16-.09-.32-.21-.43-.15-.14-.32-.21-.53-.22l-1.12-.06c-.19,0-.4,.09-.53,.22-.02,.01-.02,.04-.04,.06,0,0,0,0-.01,0-.16,.09-.3,.27-.34,.45-.04,.19-.03,.41,.08,.58,.1,.16,.26,.31,.45,.34Z"
      />
      <path
        className="cls-3"
        d="M86.35,42.69c.57,.17,1.22-.09,1.51-.6,.33-.58,.19-1.3,.13-1.93-.06-.63-.51-1.23-1.2-1.2-.6,.03-1.26,.52-1.2,1.19,.02,.2,.04,.39,.05,.6-.14,.19-.25,.42-.24,.68,.02,.58,.38,1.09,.95,1.26Z"
      />
      <path className="cls-3" d="M85.59,40.16s0,0,0-.01c0,0,0,0,0,0v.02Z" />
      <path
        className="cls-3"
        d="M69.21,42.48c.65-.03,1.2-.53,1.2-1.2v-1.42c0-.63-.55-1.23-1.2-1.2-.65,.03-1.2,.53-1.2,1.2v1.42c0,.63,.55,1.23,1.2,1.2Z"
      />
      <path
        className="cls-3"
        d="M74.11,48.99c.67,1.1,1.83,1.86,3.1,2.03,1.38,.19,3.02-.24,3.54-1.68,.14-.38-.16-.82-.52-.92-.42-.11-.78,.14-.92,.52h0c-.03,.05-.11,.19-.06,.13-.03,.04-.07,.07-.1,.11-.02,.03-.03,.03-.04,.04,0,0,0,0-.01,0-.09,.07-.2,.12-.3,.17-.03,.02-.04,.02-.05,.03,.02,0,.02-.01-.02,0-.06,.02-.12,.04-.18,.06-.11,.03-.22,.05-.33,.07,0,0,0,0,0,0,0,0-.02,0-.05,0-.06,0-.12,0-.18,.01h-.33s-.12-.01-.14,0c-.04,0-.1-.01-.1-.01-.22-.04-.43-.1-.64-.18-.02,0-.02,0-.04-.01,.01,0,.01,0-.02-.02-.06-.03-.11-.05-.17-.08-.1-.05-.19-.11-.29-.17-.05-.03-.1-.07-.15-.1l-.06-.04c-.08-.07-.17-.15-.25-.22-.08-.08-.16-.17-.24-.26,0-.01-.02-.03-.03-.05-.04-.06-.08-.12-.12-.19-.21-.35-.67-.48-1.03-.27-.36,.21-.48,.68-.27,1.03Z"
      />
      <path
        className="cls-3"
        d="M50.23,35.76c1.37,.98,3.18-.17,3.53-1.64,.21-.9,.02-1.81-.21-2.68-.13-.51-.72-.86-1.23-.7-.51,.16-.84,.69-.7,1.23,.08,.31,.15,.61,.21,.92,.02,.2,.02,.39,.01,.58-.02,.1-.05,.21-.08,.31-.02,.03-.03,.07-.05,.11,0,0,0,.01-.01,.02-.02,.02-.04,.04-.05,.05-.03,.03-.06,.06-.08,.08-.03,.02-.07,.04-.1,.05-.01,0-.03,0-.04,.01-.02,0-.03,0-.05,0,0,0,0,0-.01,0-.03-.02-.05-.05-.07-.07-.11-.17-.2-.35-.28-.54-.12-.3-.23-.62-.29-.94,0-.09,0-.18,0-.27,.01-.04,.02-.09,.03-.12,.16-.5-.19-1.11-.7-1.23-.55-.12-1.06,.16-1.23,.7l-.03-.02c-.25,.79-.04,1.61,.25,2.36,.27,.7,.58,1.34,1.2,1.79Z"
      />
      <path
        className="cls-3"
        d="M48.57,43.59c.6-.18,1.1-.59,1.43-1.12,.3-.5,.43-1.08,.53-1.65,.05-.27,.04-.52-.1-.77-.12-.21-.36-.41-.6-.46-.26-.06-.54-.05-.77,.1-.21,.13-.42,.35-.46,.6-.06,.33-.12,.66-.24,.98-.04,.09-.09,.17-.15,.26-.02,.02-.04,.04-.05,.06-.03,.02-.06,.04-.09,.05,0-.03-.01-.05-.02-.08,0-.08,0-.16,0-.24,.06-.29,.16-.58,.26-.86,.09-.23,.02-.57-.1-.77-.12-.2-.36-.41-.6-.46-.26-.06-.54-.05-.77,.1-.23,.15-.36,.34-.46,.6l-.03-.03c-.2,.52-.38,1.06-.35,1.63,.03,.57,.24,1.21,.69,1.62,.51,.46,1.21,.64,1.88,.44Z"
      />
      <path
        className="cls-3"
        d="M166.34,32.13l5.19,.4c.52,.04,1.02-.49,1-1-.03-.58-.44-.96-1-1l-1.53-.12,.52-3.01c.05-.27,.04-.52-.1-.77-.12-.21-.36-.41-.6-.46-.48-.11-1.14,.15-1.23,.7l-.58,3.39-1.67-.13c-.52-.04-1.02,.49-1,1,.03,.58,.44,.96,1,1Z"
      />
      <path
        className="cls-3"
        d="M169.78,33.69c-.74-.13-1.47,.11-1.88,.75-.04,0-.08,0-.13,0h-.06c-1.06,.16-1.78,1.28-1.79,2.29,0,1.12,.86,2.07,1.93,2.32,.49,.11,1.03,.12,1.51-.06,.6-.22,1.06-.59,1.44-1.09,.66-.87,.83-2.11,.37-3.1-.25-.55-.79-1-1.39-1.11Zm-1.68,2.73s0,0,0,0c-.02,0-.03,.01,0,0Zm-.12,.35s0,0,0,0c0,0,0,0,0,.02h0s0,0-.01-.02Zm.02-.14s-.01,.03-.02,.03c0,0,.01-.02,.02-.03h0Zm1.45-.44s-.02,.09-.03,.13c-.02,.06-.04,.1-.05,.15-.04,.07-.07,.15-.11,.21-.02,.03-.04,.06-.06,.09-.06,.07-.13,.14-.2,.2-.03,.02-.06,.04-.09,.06-.02,.02-.05,.03-.08,.04-.04,.01-.08,.02-.13,.03-.1,0-.2,.01-.31,0-.01,0-.05,0-.09-.02,0,0,0,0-.02-.01-.03-.02-.07-.03-.1-.05-.01,0-.02-.01-.03-.02-.04-.03-.07-.07-.11-.11,0,0,0,.01,0,.02,0-.01-.02-.03-.02-.03,0,0,.01,.01,.02,.02,0-.02-.02-.04-.04-.07,0,0,0,0,0,0,0,0,0,0,0,0,0,.01,.01,.03,.02,.04,0,0,0,0-.01,0,0,0,0,0,0,0,0,0,0-.02,0-.02,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01,0,0,0,0,0,0,0-.06,0-.12,0-.18,0-.02,0-.04,.01-.06,.02-.04,.04-.08,.05-.09,.02-.02,.04-.04,.06-.06,0,0,.02-.01,.02-.01,0,0,.03-.01,.05-.02,.04,0,.07-.02,.11-.03,.21-.04,.44-.23,.56-.41,.2-.03,.39-.12,.54-.27,.02,.05,.03,.1,.04,.15,0,.12,0,.23,0,.35Z"
      />
      <path
        className="cls-3"
        d="M164.62,42.46l1.27-.19c-.21,1.08-.29,2.18-.18,3.28,.05,.52,.43,1.03,1,1,.5-.02,1.05-.44,1-1-.07-.72-.07-1.44,.01-2.16,0-.05,.03-.36,0-.1,0-.08,.02-.16,.04-.24,.03-.17,.06-.35,.1-.52,.04-.19,.1-.38,.16-.57l.32-.05c-.05,1.47,.08,2.94,.38,4.38,.1,.51,.74,.86,1.23,.7,.54-.18,.81-.68,.7-1.23-.07-.33-.14-.68-.18-1.02,0-.02-.01-.14-.01-.16-.01-.09-.02-.17-.03-.26-.02-.19-.04-.37-.05-.56-.05-.71-.06-1.43-.02-2.14l.73-.11c.52-.08,.85-.76,.7-1.23-.18-.57-.67-.78-1.23-.7l-6.47,.95c-.52,.08-.85,.76-.7,1.23,.18,.57,.67,.78,1.23,.7Z"
      />
      <path
        className="cls-3"
        d="M175.64,35.42h-.01s2.75-.37,2.75-.37c-.9,1.41-1.79,2.82-2.7,4.22-.28,.44-.11,1.12,.36,1.37,.49,.26,1.07,.11,1.37-.36,1.27-1.99,2.54-3.99,3.82-5.98,.37-.58-.1-1.6-.86-1.5l-4.73,.62c-.52,.07-1.03,.41-1,1,.02,.48,.44,1.07,1,1Z"
      />
      <path
        className="cls-3"
        d="M181.75,40.91c-.05,1.29,1.95,1.28,2,0,.05-1.29,.06-2.58,.05-3.86l3.32-.92c.5-.14,.86-.72,.7-1.23-.16-.51-.69-.85-1.23-.7l-2.84,.78c-.04-1.19-.1-2.37-.2-3.56-.04-.54-.43-1-1-1-.51,0-1.04,.46-1,1,.26,3.16,.33,6.33,.2,9.49Z"
      />
      <path
        className="cls-3"
        d="M188.79,31.96h.01c.51-.32,1.2-.27,1.63,.11,.45,.41,.51,1.07,.21,1.6-.17,.3-.34,.4-.74,.63-.51,.29-.97,.66-1.17,1.24s-.09,1.19-.04,1.77c.06,.69,.11,1.37,.17,2.06,.04,.54,.43,1,1,1,.51,0,1.04-.46,1-1-.06-.77-.13-1.54-.19-2.31-.02-.22-.1-.61-.07-.82,.01,0,.07-.08,0-.05,.09-.06,.19-.12,.29-.17,1.1-.62,1.8-1.57,1.9-2.85,.2-2.61-2.84-4.29-5.02-2.94-1.09,.68-.09,2.41,1.01,1.73Z"
      />
      <path
        className="cls-3"
        d="M192.65,41.79c-.03-.13-.09-.24-.18-.34-.07-.11-.16-.19-.28-.26l-.24-.1c-.18-.05-.35-.05-.53,0-.04,.01-.09,.02-.13,.04-.12,.05-.24,.09-.35,.15-.04,.02-.08,.05-.12,.08-.1,.07-.2,.15-.29,.24-.03,.03-.06,.07-.09,.1-.08,.1-.16,.19-.22,.3-.06,.11-.11,.23-.16,.35-.02,.04-.03,.09-.05,.13-.04,.13-.05,.27-.02,.4,0,.13,.05,.26,.12,.37,.04,.08,.11,.13,.17,.19l.05,.11c.09,.15,.21,.27,.36,.36l.24,.1c.18,.05,.35,.05,.53,0h-.02s.06-.02,.08-.03c.1-.04,.2-.08,.3-.13,.12-.06,.23-.16,.33-.24,.04-.04,.08-.08,.11-.12,.08-.1,.18-.21,.24-.33,.06-.12,.12-.25,.16-.38,0-.02,.01-.05,.02-.07,.02-.11,.04-.23,.05-.34,.01-.14-.02-.28-.04-.42,0-.06-.02-.11-.04-.16Zm-1.82,.34l.02-.02,.05-.02s-.05,.03-.07,.04Z"
      />
      <path
        className="cls-3"
        d="M144.07,57.18c4.32-1.02,8.5-2.55,12.46-4.53,.08,.05,.14,.11,.22,.16,4.43,2.82,9.96,3.91,15.13,4.15,5.55,.25,11.13-.63,16.43-2.26,4.83-1.49,10.19-3.45,14.07-6.78,7.88-6.79,4.87-19.79-2.84-25.33-4.93-3.55-11.46-4.83-17.31-5.98-5.85-1.15-12.5-2.66-17.99,.15-.23,.12-.35,.28-.42,.46-.09,0-.18-.01-.29,.01h-.01c-10.21,2.46-15.75,12.94-14.29,22.94,.63,4.27,2.39,8.27,5.55,11.11-3.59,1.72-7.35,3.05-11.24,3.97-1.25,.29-.72,2.22,.53,1.93Zm8.16-13.21c-1.82-5.12-1.74-11.06,.77-15.95,2.25-4.38,6.26-7.7,11.06-8.86,.36-.09,.56-.31,.65-.57,.17,.01,.35,0,.54-.1,4.44-2.28,9.92-1.13,14.59-.3,4.92,.87,10.07,1.89,14.68,3.89,4.21,1.82,7.66,4.86,9.34,9.2s1.61,9.26-.93,13.05c-2.54,3.79-7.7,5.76-11.82,7.31-4.7,1.76-9.65,2.96-14.67,3.28-5.74,.37-12.67-.31-17.81-3.37,1.03-.57,2.04-1.16,3.03-1.79,1.08-.69,.08-2.42-1.01-1.73-1.26,.8-2.55,1.55-3.86,2.24-2-1.59-3.61-3.64-4.56-6.3Z"
      />
    </svg>
  );
};

export default WaitVacation;