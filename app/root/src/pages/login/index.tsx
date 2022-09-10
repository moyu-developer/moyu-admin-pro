import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Center,
  Group,
  Button,
  Divider,
  Container,
} from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons";
import { useForm } from "@mantine/form";
import { showNotification } from '@mantine/notifications';
import useStyles from "./index.css";

export default function AuthenticationTitle() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: { name: "", password: "", remember: true },

    validate: {
      name: (value) => (value.length < 5 ? "请输入您的用户账号" : null),
      password: (value) => (value.length > 5 ? null : "请输入您的密码"),
    },
  });

  const handleLogin: Parameters<typeof form.onSubmit>[0] = (values) => {
    const { name, password } = values

    console.log(name, password)

    showNotification({
      title: '登录成功！',
      message: '您可以尽情享受系统的一切! 🤥',
    })
  }

  return (
    <Center className={classes.login}>
      <Container sx={{ width: "430px" }}>
        <Title
          align="center"
          sx={(theme) => ({
            fontWeight: 500,
            fontFamily: "Futura",
          })}
        >
          😊 Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          还没有账户吗，创建帐户 ？
          <Anchor<"a">
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Create account
          </Anchor>
        </Text>

        <form onSubmit={form.onSubmit(handleLogin)}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="账号"
              placeholder="请输入您的账号信息"
              {...form.getInputProps("name")}
            />
            <PasswordInput
              label="密码"
              placeholder="请输入账号密码"
              mt="md"
              {...form.getInputProps("password")}
            />
            <Group position="apart" mt="md">
              <Checkbox label="记住登录的信息" {...form.getInputProps("remember", { type: 'checkbox' })} />
              <Anchor<"a">
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
              >
                忘记密码？
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit">
              立即出发
            </Button>

            <Divider
              label="或者使用第三方账号开始"
              labelPosition="center"
              my="lg"
            />
            <Group grow mb="md" mt="md">
              <Button
                leftIcon={<IconBrandGithub />}
                uppercase
                radius="md"
                variant="outline"
              >
                Google
              </Button>
              <Button leftIcon={<IconBrandTwitter />} uppercase radius="md">
                Twitter
              </Button>
            </Group>
          </Paper>
        </form>
      </Container>
    </Center>
  );
}
