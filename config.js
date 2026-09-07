/* ============================================================================
   CONFIG.JS — Claves de conexión a servicios externos
   ============================================================================
   Este archivo existe SOLO para mantener tus claves separadas del código
   principal del dashboard (dashboard_noticias_propuesta.html), y así sea más
   fácil de mantener: si algún día cambias de proyecto de Supabase, o rotas
   tu clave, solo tocas ESTE archivo — no el dashboard completo.

   IMPORTANTE — lo que esto SÍ y NO protege:
   - SÍ ayuda a mantener el código organizado y más fácil de editar.
   - NO oculta la clave de nadie que visite tu página: cualquier persona que
     abra el dashboard en su navegador puede ver este archivo (es parte de
     cómo funcionan las páginas web: todo lo que se le manda al navegador,
     el navegador lo puede leer). Esto es normal y esperado para una clave
     "anon / publishable" de Supabase — están diseñadas para poder ser
     públicas, siempre y cuando las políticas de acceso (RLS) en tu base de
     datos estén bien configuradas. La clave "service_role" (si algún día la
     usas) es la única que JAMÁS debe aparecer en un archivo que el navegador
     descarga — esa sí es secreta de verdad.

   Instrucciones:
   1. Reemplaza los dos valores de abajo con tu Project URL y tu clave
      anon/publishable reales (Supabase → botón "Connect").
   2. Sube este archivo junto con el dashboard al mismo repositorio/carpeta.
   3. No necesitas tocar el archivo del dashboard para nada de esto.
============================================================================ */

window.DLB_CONFIG = {
  SUPABASE_URL: "https://mnqeuesoewpdnwaxhqeh.supabase.co",     // ej. https://abcxyz.supabase.co
  SUPABASE_ANON_KEY: "sb_publishable_0OV23xZgoCcJwZfiVuzJuA_Bj-DesrF"    // tu clave anon / publishable
};
