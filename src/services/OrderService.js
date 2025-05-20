import { supabase } from "../supabase.js";

export async function getOrdersCount() {
  	const { count, error } = await supabase.from("Order").select("*", { count: "exact", head: true });
  	if (error) {
  	  console.error("Error fetching order count:", error.message);
  	  return 0;
  	}
  	return count;
}