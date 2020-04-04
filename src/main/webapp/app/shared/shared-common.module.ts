import { NgModule } from '@angular/core';

import { JhipsterTrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterTrainingSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterTrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterTrainingSharedCommonModule {}
