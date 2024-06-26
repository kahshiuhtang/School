import http from "k6/http";
// export default function () {
//     const responses = []
//     for(var x = 1; x < 2046; x++){
//         for(var y = 1; y < 2046; y++){
//             responses.push(['GET', `http://167.172.239.172/tiles/9/${x}/${y}.png`, null, { tags: { ctype: 'images' } }])
//             //http.get(`http://167.172.239.172/tile/17/${x}/${y}.png`);
//         }
//     }
//     http.batch(responses)
//   }

import { sleep } from "k6";

export const options = {
  scenarios: {
    constant_load: {
      executor: "constant-arrival-rate",
      rate: 2000, // 4000 requests per second
      timeUnit: "1s", // adjust this if you want to run for a different duration
      duration: "20s", // adjust this if you want to run for a different duration
      preAllocatedVUs: 300, // adjust this based on your desired concurrency
      maxVUs: 6000, // adjust this based on your desired max concurrency
    },
  },
  http: {
    timeout: "2s", // Adjust the timeout value as needed
  },
};

export default () => {
  let x = Math.floor(Math.random() * (30020 - 30000 + 1)) + 30000;
  let y = Math.floor(Math.random() * (44030 - 44000 + 1)) + 44000;
  const urlRes = http.get(`http://143.198.19.157/tiles/17/${x}/${y}.png`);
  //const urlRes = http.get(`http://167.172.239.172/tile/17/${x}/${y}.png`);
  //const urlRes = http.get(`http://167.172.239.172/tile/17/30010/44010.png`);
  //const urlRes = http.get(`http://143.198.19.157/`)
  //const urlRes = http.get(`http://146.190.141.61:8080/tile/17/${x}/${y}.png`);
  sleep(1);
};
