import {
  Container,
  Flex,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  Grid,
  Box,
} from "@radix-ui/themes";
import IconDarkLight from "@/components/IconDarkLight";
import { ChatBubbleIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
// import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <main className=" flex min-h-full flex-col  items-center justify-between p-16 ">
      <Container p={"3"} size="1">
        <Flex direction="column" pb="4">
          <Flex m={"0"} p={"0"} justify={"between"} align={"baseline"}>
            <Heading>Coding Issue Tracker</Heading>
            <IconDarkLight />
          </Flex>

          <Text>
            Here you can find the issues relevant to your certain project.
          </Text>
        </Flex>

        <Flex className="" gap="4" direction="column">
          <Card
            variant="surface"
            className="  hover:shadow-lg m-0 hover:scale-105 transition-all duration-100 ease-in-out  hover:bg-gray-1 bg-red-3 "
          >
            <Flex gap="1" direction="column">
              <Text>Issue #23 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Devops</Badge>
                <Badge>UI</Badge>
              </Flex>
              <Text color="gray">
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission
              </Text>
              <Button className="hover:cursor-pointer" color="amber">
                Click on my tomato
              </Button>

              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card asChild variant="ghost">
            <a href="">
              <Flex gap="1" direction="column">
                <Text>Issue #24 - Button Is Wrong Color</Text>
                <Flex gap="2">
                  <Badge>Backend</Badge>
                </Flex>
                <Text>
                  This is an issue that is very serious. On a dashboard that
                  only 5 users use, there is a button that is the wrong shade of
                  green. This is mission critical.
                </Text>
                <Flex justify="between" pt="1">
                  <Flex align="center">
                    {" "}
                    {/* align icon to our text */}
                    <ChatBubbleIcon />
                    <Text ml="2" size="1">
                      3 Comments
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </a>
          </Card>
          <Card
            variant="classic"
            className=""
            style={{ borderWidth: "1px", borderColor: "var(--gray-1)" }}
          >
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Hacking Team</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card
            variant="classic"
            className=""
            style={{ borderWidth: "1px", borderColor: "var(--gray-1)" }}
          >
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Hacking Team</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card
            variant="classic"
            className=""
            style={{ borderWidth: "1px", borderColor: "var(--gray-1)" }}
          >
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Hacking Team</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card variant="ghost" asChild>
            <a href="">
              <Flex gap="1" direction="column">
                <Text>Issue #24 - Button Is Wrong Color</Text>
                <Flex gap="2">
                  <Badge>Hacking Team</Badge>
                </Flex>
                <Text>
                  This is an issue that is very serious. On a dashboard that
                  only 5 users use, there is a button that is the wrong shade of
                  green. This is mission critical.
                </Text>
                <Flex justify="between" pt="1">
                  <Flex align="center">
                    {" "}
                    {/* align icon to our text */}
                    <ChatBubbleIcon />
                    <Text ml="2" size="1">
                      3 Comments
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </a>
          </Card>
          <Container size={"1"}>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
            <Card asChild variant="ghost">
              <a href="">Buy it</a>
            </Card>
          </Container>
        </Flex>
      </Container>
    </main>
  );
}
