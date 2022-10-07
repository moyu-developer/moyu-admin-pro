import {
  Box,
  Button,
  Center,
  Tag,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  List,
  ListIcon,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import PageContainer from "@/components/PageContainer";
import Card from "@/components/Card";
import { IconBuilding, IconLink, IconMapPin, IconUser } from "@tabler/icons";
import ChangePassword from './ChangePassword'
import RelationshipUser from './RelationshipUser'
import Security from './Security'

const UserInfo = () => {
  return (
    <PageContainer>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1} w="100%">
          <Card>
            <VStack mb={4}>
              <Image
                alignSelf="center"
                borderRadius="full"
                boxSize="70%"
                src="https://avatars.githubusercontent.com/u/45115006?v=4"
              />
              <Heading pt={2} size="md">
                fanghua.wang
              </Heading>
              <Text fontSize="sm" color="gray.400">
                一句话描述你当前在干什么吧
              </Text>
            </VStack>
            <Text>
              一名前端开发者的仓库，如果觉得不错的话，请记得给您中意的项目点一个明星
            </Text>
            <Button my={6} w="full">
              Edit Profile
            </Button>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={IconUser} color="blue.500" fontSize="xl" />
                技术专家
              </ListItem>
              <ListItem>
                <ListIcon as={IconMapPin} fontSize="xl" color="blue.500" />
                浙江省杭州市
              </ListItem>
              <ListItem>
                <ListIcon as={IconLink} fontSize="xl" color="blue.500" />
                我的主页
              </ListItem>
              <ListItem>
                <ListIcon as={IconBuilding} fontSize="xl" color="blue.500" />
                Moyu Devloper
              </ListItem>
            </List>
            <Heading my={4} fontSize="md">
              标签
            </Heading>
            <Flex my={4} flexWrap="wrap" gap={2}>
              <Tag variant='outline' colorScheme='blue' >Adobe Photoshop</Tag>
              <Tag variant='outline' colorScheme='blue' >UX/UI</Tag>
              <Tag variant='outline' colorScheme='blue' >Web Design</Tag>
              <Tag variant='outline' colorScheme='blue' >React</Tag>
            </Flex>
          </Card>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <Card>
            <Tabs size="md" variant="soft-rounded" >
              <TabList>
                <Tab>
                  安全设置
                </Tab>
                <Tab>修改密码</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Security/>
                </TabPanel>
                <TabPanel>
                  <ChangePassword/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </GridItem>
      </Grid>
    </PageContainer>
  );
};

export default UserInfo;
