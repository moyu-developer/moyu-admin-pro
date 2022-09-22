// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";

const defaultData = [
  {
    id: "japan",
    color: "hsl(292, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 224,
      },
      {
        x: "helicopter",
        y: 291,
      },
      {
        x: "boat",
        y: 129,
      },
      {
        x: "train",
        y: 160,
      },
      {
        x: "subway",
        y: 272,
      },
      {
        x: "bus",
        y: 188,
      },
      {
        x: "car",
        y: 220,
      },
      {
        x: "moto",
        y: 114,
      },
      {
        x: "bicycle",
        y: 167,
      },
      {
        x: "horse",
        y: 239,
      },
      {
        x: "skateboard",
        y: 209,
      },
      {
        x: "others",
        y: 290,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(82, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 291,
      },
      {
        x: "helicopter",
        y: 294,
      },
      {
        x: "boat",
        y: 14,
      },
      {
        x: "train",
        y: 299,
      },
      {
        x: "subway",
        y: 228,
      },
      {
        x: "bus",
        y: 160,
      },
      {
        x: "car",
        y: 68,
      },
      {
        x: "moto",
        y: 74,
      },
      {
        x: "bicycle",
        y: 219,
      },
      {
        x: "horse",
        y: 241,
      },
      {
        x: "skateboard",
        y: 76,
      },
      {
        x: "others",
        y: 171,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(98, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 290,
      },
      {
        x: "helicopter",
        y: 188,
      },
      {
        x: "boat",
        y: 185,
      },
      {
        x: "train",
        y: 8,
      },
      {
        x: "subway",
        y: 191,
      },
      {
        x: "bus",
        y: 287,
      },
      {
        x: "car",
        y: 34,
      },
      {
        x: "moto",
        y: 154,
      },
      {
        x: "bicycle",
        y: 90,
      },
      {
        x: "horse",
        y: 182,
      },
      {
        x: "skateboard",
        y: 287,
      },
      {
        x: "others",
        y: 237,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(56, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 269,
      },
      {
        x: "helicopter",
        y: 18,
      },
      {
        x: "boat",
        y: 264,
      },
      {
        x: "train",
        y: 7,
      },
      {
        x: "subway",
        y: 85,
      },
      {
        x: "bus",
        y: 29,
      },
      {
        x: "car",
        y: 48,
      },
      {
        x: "moto",
        y: 133,
      },
      {
        x: "bicycle",
        y: 145,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 238,
      },
      {
        x: "others",
        y: 283,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(337, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 153,
      },
      {
        x: "helicopter",
        y: 119,
      },
      {
        x: "boat",
        y: 86,
      },
      {
        x: "train",
        y: 47,
      },
      {
        x: "subway",
        y: 286,
      },
      {
        x: "bus",
        y: 184,
      },
      {
        x: "car",
        y: 192,
      },
      {
        x: "moto",
        y: 262,
      },
      {
        x: "bicycle",
        y: 99,
      },
      {
        x: "horse",
        y: 105,
      },
      {
        x: "skateboard",
        y: 219,
      },
      {
        x: "others",
        y: 13,
      },
    ],
  },
];

const MyResponsiveLine = () => {
  return (
    <ResponsiveLine
      data={defaultData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisLeft={null}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "category10" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};

export default MyResponsiveLine;
