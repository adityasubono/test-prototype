import {Box, Card, Grid, styled, useTheme} from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import StatCards from "../dashboard/shared/StatCards";
import TopSellingTable from "../dashboard/shared/TopSellingTable";
import StatCards2 from "../dashboard/shared/StatCards2";
import RowCards from "../dashboard/shared/RowCards";
import DoughnutChart from "../dashboard/shared/Doughnut";
import UpgradeCard from "../dashboard/shared/UpgradeCard";
import Campaigns from "../dashboard/shared/Campaigns";

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const { palette } = useTheme();
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[
                    { name: "Home", path: "/material" }
                ]} />
            </Box>

            <SimpleCard title="Stat Cards">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <StatCards />
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    );
};

export default Home;
