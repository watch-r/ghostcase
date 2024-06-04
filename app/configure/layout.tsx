import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <MaxWidthWrapper className='flex-1 flex flex-col'>
            <Steps />
            {children}
        </MaxWidthWrapper>
    );
};

export default Layout;
