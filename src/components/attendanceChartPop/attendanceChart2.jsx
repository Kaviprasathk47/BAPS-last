import { Button , Box } from "@mui/material";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import Chart1 from './chart/attendanceChart';
import useStyles from "./attendanceChart2Styles";
const AttendanceChart2 = () =>{
    const classes = useStyles();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        document.title = "B A P S - Home";
    }, []);
    return(
        <Box className={classes.container}>
            <Chart1 />
            <Button onClick={showModal}>View Detail</Button>
            <Modal title="Basic Modal" open={isModalVisible} onCancel={handleClose}
                footer={[
                    <Button onClick={handleClose}>Close</Button>
                ]} >
                <Chart1 />
            </Modal>
        </Box>
    );
}


export default AttendanceChart2;