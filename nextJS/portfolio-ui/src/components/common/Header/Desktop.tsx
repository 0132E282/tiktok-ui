import {Container, Stack ,Link as MuiLink} from "@mui/material";
import {Box } from "@mui/system";
import { TypeMenu} from "./RouterMenu";
import Link from "next/link";
import clsx from "clsx";
import { Router, useRouter } from "next/router";
interface PropsHeaderDesktop {
    menuList :Array<TypeMenu>
}

function HeaderDesktop({menuList}:PropsHeaderDesktop) {
  const router = useRouter();
  return (
    <Box component="header" display={{ xs: "none", lg: "block"}} py={3}>
       <Container>
           <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'content'} >
               {menuList.map((item,index) =>
                  <Link key={item.path} href={item.path} legacyBehavior>
                    <MuiLink sx={{ml : 4 , fontWeight:"medium" }} className={clsx({active : router.pathname === item.path })}>{item.label}</MuiLink>
                </Link>
              )}
           </Stack>
       </Container>
    </Box>
  );
}

export default HeaderDesktop;