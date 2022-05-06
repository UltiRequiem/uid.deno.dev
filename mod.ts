import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import { v4 } from 'https://esm.sh/uuid';

serve(() => new Response(v4()));
