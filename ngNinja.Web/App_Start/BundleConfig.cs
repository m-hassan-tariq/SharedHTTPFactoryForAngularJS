using System.Web;
using System.Web.Optimization;

namespace ngNinja.Web {
    public class BundleConfig {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new ScriptBundle("~/Angular")
                .Include("~/Scripts/lib/angular/angular.js")
                .Include("~/Scripts/lib/angular-ui-router/angular-ui-router.js")
                .Include("~/Scripts/lib/angular-resource/angular-resource.js")
                .Include("~/Scripts/lib/angular-ui/ui-bootstrap-tpls.js"));

            bundles.Add(new ScriptBundle("~/AngularApp")
                .IncludeDirectory("~/Scripts/app/modules", "*.js", true)
                .Include("~/Scripts/app/appModule.js")
                .Include("~/Scripts/app/appRoute.js")
               );

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}