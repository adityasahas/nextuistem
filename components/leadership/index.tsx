import { Card, Divider, Text, Badge, Avatar } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Leadership = () => {
  const badgeGradient = {
    background:
      "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
  };

  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text                id="leadership"
css={{ color: "$blue600" }} h3>
            Leadership
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          ></Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Aditya Sahasranam</h3>
              <Badge style={badgeGradient}>President | Director of Tech</Badge>
              <p>
                Adi is a junior in High School who is very interested in
                Technology. He handles all of the Technology Related activities and coordinates the activities for other subjects. His extracurriculars are Tennis, Band and Decathlon.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Lucas Esqueda</h3>
              <Badge style={badgeGradient}>Vice President</Badge>
              <p>Lucas is a junior in Sierra Pacific High school he is the vice president of the stem club and I help the stem club by running officer meetings. Lucas is involved in many extracurricular activties like tennis, percussion, CSF, and boyscouts.</p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Marianne Lababit</h3>
              <Badge style={badgeGradient}>Secretary</Badge>
              <p>
                I am Secretary for the club. I help by taking minutes and giving
                my thoughts on events that we are planning. Outside the club, I
                am involved in Color Guard and other clubs like CSF and
                Environmental Club.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Xinyu Yang</h3>
              <Badge style={badgeGradient}>
                Treasurer | Co-Director of Science
              </Badge>
              <p>
                I help in the Science aspect of the club alongside Greyson and
                will manage club funds when we obtain them. I study biology
                outside of school to try and further my knowledge of the
                sciences.
              </p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Greyson Mueller</h3>
              <Badge style={badgeGradient}>Director of Science</Badge>
              <p>Greyson is a junior in high school who enjoys science. Hes in FFA where he learns about veterinary sciences on a CDE team. He handles science related matters in STEM Club along with Xinyu and enjoys sharing his scientific knowledge with others.</p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Breanna Cruz</h3>
              <Badge style={badgeGradient}>Director of Engineering</Badge>
              <p>
                I am the director of Engineering for the STEM Club. For the
                engineering part of our club, I plan to make fun projects
                thatll help the members that are interested in engineering.
                Outside of our STEM Club, I am involved in CSF, Color Guard, and
                Environmental Club.
              </p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
                  <h3>Andrew Pelton</h3>
              <Badge style={badgeGradient}>
                Director of Math | Co-Director of Tech
              </Badge>
              <p>
                Andrew is the director of Math at the STEM Club. He is currently a
                junior, and participates in the band at school. He really enjoys
                coding and hopes to share his passion for math and tech!
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Dylan Gambino</h3>
              <Badge style={badgeGradient}>Co-Director of Engineering</Badge>
              <p>Dylan, 16 year old high school dual enrollment student at Sierra Pacific High School. He is hoping to major in Computer Science when going off to college. He mainly focuses on hands on activities that build foundations for creativity and innovation for the Sierra Pacific STEM Club.</p>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
