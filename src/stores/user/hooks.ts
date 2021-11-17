// import { createSelector } from "@reduxjs/toolkit";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../types";

// export const useUserData = () => {
// 	const selector = useMemo(
// 		() =>
// 			createSelector(
// 				(state: RootState) => state.constant.userData,
// 				(value) => {
// 					return value;
// 				}
// 			),
// 		[]
// 	);
// 	return useSelector((state) => selector(state));
// };