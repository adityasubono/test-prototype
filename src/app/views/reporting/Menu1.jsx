import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const Menu1 = () => {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[
                    { name: "Reporting", path: "/material" }, { name: "Menu 1" }
                ]} />
            </Box>

            <SimpleCard title="Menu 1">
                <h2>Start You Here ...</h2>
            </SimpleCard>
        </Container>
    );
};

export default Menu1;
