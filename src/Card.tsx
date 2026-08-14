// material ui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type CardProps = {
  name: string;
  time: string;
  time2?: string;
};

export default function Card1({name ,time,time2}:CardProps){

    
    
    
    return(
          <Card
 sx={{
  width: 200,
  padding: 2,
  textAlign: "center",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "20px",
  color: "white",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}}
>
 <Typography variant="h6">{name}</Typography>

  <Typography variant="body1">{time}</Typography>
  <Typography variant="h5">{time2}</Typography>

        </Card>
    )
}