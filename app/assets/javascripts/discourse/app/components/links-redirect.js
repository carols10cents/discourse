import Component from "@ember/component";
import ClickTrack from "discourse/lib/click-track";

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    $(this.element).on("click.discourse-redirect", "a", (e) => {
      return ClickTrack.trackClick(e, this.siteSettings);
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    $(this.element).off("click.discourse-redirect", "a");
  },
});
