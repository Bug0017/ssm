import { Stack } from '@fluentui/react';
import { Player } from '@lottiefiles/react-lottie-player';

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {

    return (
      <Stack horizontalAlign="center">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_q7uarxsb.json"
          style={{
            height: "200px",
            width: "200px",
            position: "fixed",
            zIndex: 999,
            margin: "auto",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </Stack>
    );
}