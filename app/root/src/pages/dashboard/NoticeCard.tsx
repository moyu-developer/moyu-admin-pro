import Card from "@/components/Card";
import { List, ListItem, ListIcon, Icon } from "@chakra-ui/react";
import { IconReportAnalytics } from "@tabler/icons";

const NoticeCard = () => {
  return (
    <Card title="通知公告" flex={2} >
      <List spacing={3}>
        {
          [1,2,3,4].map((i) => (
            <ListItem key={i} >
              <ListIcon fontSize="xl" as={IconReportAnalytics} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
          ))
        }
      </List>
    </Card>
  );
};

export default NoticeCard;
